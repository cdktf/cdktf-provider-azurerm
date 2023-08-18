# `azurerm_lab_service_plan`

Refer to the Terraform Registory for docs: [`azurerm_lab_service_plan`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan).

# `labServicePlan` Submodule <a name="`labServicePlan` Submodule" id="@cdktf/provider-azurerm.labServicePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServicePlan <a name="LabServicePlan" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan azurerm_lab_service_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlan(Construct Scope, string Id, LabServicePlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig">LabServicePlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig">LabServicePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown">PutDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection">PutDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport">PutSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown">ResetDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection">ResetDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId">ResetDefaultNetworkSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId">ResetSharedGalleryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport">ResetSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDefaultAutoShutdown` <a name="PutDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown"></a>

```csharp
private void PutDefaultAutoShutdown(LabServicePlanDefaultAutoShutdown Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---

##### `PutDefaultConnection` <a name="PutDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection"></a>

```csharp
private void PutDefaultConnection(LabServicePlanDefaultConnection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---

##### `PutSupport` <a name="PutSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport"></a>

```csharp
private void PutSupport(LabServicePlanSupport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts"></a>

```csharp
private void PutTimeouts(LabServicePlanTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

---

##### `ResetDefaultAutoShutdown` <a name="ResetDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown"></a>

```csharp
private void ResetDefaultAutoShutdown()
```

##### `ResetDefaultConnection` <a name="ResetDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection"></a>

```csharp
private void ResetDefaultConnection()
```

##### `ResetDefaultNetworkSubnetId` <a name="ResetDefaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId"></a>

```csharp
private void ResetDefaultNetworkSubnetId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSharedGalleryId` <a name="ResetSharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId"></a>

```csharp
private void ResetSharedGalleryId()
```

##### `ResetSupport` <a name="ResetSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport"></a>

```csharp
private void ResetSupport()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LabServicePlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LabServicePlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LabServicePlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown">DefaultAutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection">DefaultConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support">Support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput">AllowedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput">DefaultAutoShutdownInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput">DefaultConnectionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput">DefaultNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput">SharedGalleryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput">SupportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions">AllowedRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId">DefaultNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId">SharedGalleryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultAutoShutdown`<sup>Required</sup> <a name="DefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown"></a>

```csharp
public LabServicePlanDefaultAutoShutdownOutputReference DefaultAutoShutdown { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a>

---

##### `DefaultConnection`<sup>Required</sup> <a name="DefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection"></a>

```csharp
public LabServicePlanDefaultConnectionOutputReference DefaultConnection { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a>

---

##### `Support`<sup>Required</sup> <a name="Support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support"></a>

```csharp
public LabServicePlanSupportOutputReference Support { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts"></a>

```csharp
public LabServicePlanTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a>

---

##### `AllowedRegionsInput`<sup>Optional</sup> <a name="AllowedRegionsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput"></a>

```csharp
public string[] AllowedRegionsInput { get; }
```

- *Type:* string[]

---

##### `DefaultAutoShutdownInput`<sup>Optional</sup> <a name="DefaultAutoShutdownInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput"></a>

```csharp
public LabServicePlanDefaultAutoShutdown DefaultAutoShutdownInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---

##### `DefaultConnectionInput`<sup>Optional</sup> <a name="DefaultConnectionInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput"></a>

```csharp
public LabServicePlanDefaultConnection DefaultConnectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---

##### `DefaultNetworkSubnetIdInput`<sup>Optional</sup> <a name="DefaultNetworkSubnetIdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput"></a>

```csharp
public string DefaultNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SharedGalleryIdInput`<sup>Optional</sup> <a name="SharedGalleryIdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput"></a>

```csharp
public string SharedGalleryIdInput { get; }
```

- *Type:* string

---

##### `SupportInput`<sup>Optional</sup> <a name="SupportInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput"></a>

```csharp
public LabServicePlanSupport SupportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowedRegions`<sup>Required</sup> <a name="AllowedRegions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions"></a>

```csharp
public string[] AllowedRegions { get; }
```

- *Type:* string[]

---

##### `DefaultNetworkSubnetId`<sup>Required</sup> <a name="DefaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId"></a>

```csharp
public string DefaultNetworkSubnetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SharedGalleryId`<sup>Required</sup> <a name="SharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId"></a>

```csharp
public string SharedGalleryId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LabServicePlanConfig <a name="LabServicePlanConfig" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AllowedRegions,
    string Location,
    string Name,
    string ResourceGroupName,
    LabServicePlanDefaultAutoShutdown DefaultAutoShutdown = null,
    LabServicePlanDefaultConnection DefaultConnection = null,
    string DefaultNetworkSubnetId = null,
    string Id = null,
    string SharedGalleryId = null,
    LabServicePlanSupport Support = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    LabServicePlanTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions">AllowedRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#location LabServicePlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#name LabServicePlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown">DefaultAutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | default_auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection">DefaultConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | default_connection block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId">DefaultNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#id LabServicePlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId">SharedGalleryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support">Support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowedRegions`<sup>Required</sup> <a name="AllowedRegions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions"></a>

```csharp
public string[] AllowedRegions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#location LabServicePlan#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#name LabServicePlan#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}.

---

##### `DefaultAutoShutdown`<sup>Optional</sup> <a name="DefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown"></a>

```csharp
public LabServicePlanDefaultAutoShutdown DefaultAutoShutdown { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

default_auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#default_auto_shutdown LabServicePlan#default_auto_shutdown}

---

##### `DefaultConnection`<sup>Optional</sup> <a name="DefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection"></a>

```csharp
public LabServicePlanDefaultConnection DefaultConnection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

default_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#default_connection LabServicePlan#default_connection}

---

##### `DefaultNetworkSubnetId`<sup>Optional</sup> <a name="DefaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId"></a>

```csharp
public string DefaultNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#id LabServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SharedGalleryId`<sup>Optional</sup> <a name="SharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId"></a>

```csharp
public string SharedGalleryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}.

---

##### `Support`<sup>Optional</sup> <a name="Support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support"></a>

```csharp
public LabServicePlanSupport Support { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#support LabServicePlan#support}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts"></a>

```csharp
public LabServicePlanTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#timeouts LabServicePlan#timeouts}

---

### LabServicePlanDefaultAutoShutdown <a name="LabServicePlanDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlanDefaultAutoShutdown {
    string DisconnectDelay = null,
    string IdleDelay = null,
    string NoConnectDelay = null,
    string ShutdownOnIdle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay">DisconnectDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay">IdleDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay">NoConnectDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle">ShutdownOnIdle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}. |

---

##### `DisconnectDelay`<sup>Optional</sup> <a name="DisconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay"></a>

```csharp
public string DisconnectDelay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}.

---

##### `IdleDelay`<sup>Optional</sup> <a name="IdleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay"></a>

```csharp
public string IdleDelay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}.

---

##### `NoConnectDelay`<sup>Optional</sup> <a name="NoConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay"></a>

```csharp
public string NoConnectDelay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}.

---

##### `ShutdownOnIdle`<sup>Optional</sup> <a name="ShutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle"></a>

```csharp
public string ShutdownOnIdle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}.

---

### LabServicePlanDefaultConnection <a name="LabServicePlanDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlanDefaultConnection {
    string ClientRdpAccess = null,
    string ClientSshAccess = null,
    string WebRdpAccess = null,
    string WebSshAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess">ClientRdpAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess">ClientSshAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess">WebRdpAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess">WebSshAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}. |

---

##### `ClientRdpAccess`<sup>Optional</sup> <a name="ClientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess"></a>

```csharp
public string ClientRdpAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}.

---

##### `ClientSshAccess`<sup>Optional</sup> <a name="ClientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess"></a>

```csharp
public string ClientSshAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}.

---

##### `WebRdpAccess`<sup>Optional</sup> <a name="WebRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess"></a>

```csharp
public string WebRdpAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}.

---

##### `WebSshAccess`<sup>Optional</sup> <a name="WebSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess"></a>

```csharp
public string WebSshAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}.

---

### LabServicePlanSupport <a name="LabServicePlanSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlanSupport {
    string Email = null,
    string Instructions = null,
    string Phone = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#email LabServicePlan#email}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions">Instructions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone">Phone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#url LabServicePlan#url}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#email LabServicePlan#email}.

---

##### `Instructions`<sup>Optional</sup> <a name="Instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions"></a>

```csharp
public string Instructions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}.

---

##### `Phone`<sup>Optional</sup> <a name="Phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone"></a>

```csharp
public string Phone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#url LabServicePlan#url}.

---

### LabServicePlanTimeouts <a name="LabServicePlanTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlanTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#create LabServicePlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#read LabServicePlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#update LabServicePlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#create LabServicePlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#read LabServicePlan#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/lab_service_plan#update LabServicePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServicePlanDefaultAutoShutdownOutputReference <a name="LabServicePlanDefaultAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlanDefaultAutoShutdownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay">ResetDisconnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay">ResetIdleDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay">ResetNoConnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle">ResetShutdownOnIdle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisconnectDelay` <a name="ResetDisconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay"></a>

```csharp
private void ResetDisconnectDelay()
```

##### `ResetIdleDelay` <a name="ResetIdleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay"></a>

```csharp
private void ResetIdleDelay()
```

##### `ResetNoConnectDelay` <a name="ResetNoConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay"></a>

```csharp
private void ResetNoConnectDelay()
```

##### `ResetShutdownOnIdle` <a name="ResetShutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```csharp
private void ResetShutdownOnIdle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput">DisconnectDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput">IdleDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput">NoConnectDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput">ShutdownOnIdleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay">DisconnectDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay">IdleDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay">NoConnectDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle">ShutdownOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisconnectDelayInput`<sup>Optional</sup> <a name="DisconnectDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```csharp
public string DisconnectDelayInput { get; }
```

- *Type:* string

---

##### `IdleDelayInput`<sup>Optional</sup> <a name="IdleDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput"></a>

```csharp
public string IdleDelayInput { get; }
```

- *Type:* string

---

##### `NoConnectDelayInput`<sup>Optional</sup> <a name="NoConnectDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```csharp
public string NoConnectDelayInput { get; }
```

- *Type:* string

---

##### `ShutdownOnIdleInput`<sup>Optional</sup> <a name="ShutdownOnIdleInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```csharp
public string ShutdownOnIdleInput { get; }
```

- *Type:* string

---

##### `DisconnectDelay`<sup>Required</sup> <a name="DisconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay"></a>

```csharp
public string DisconnectDelay { get; }
```

- *Type:* string

---

##### `IdleDelay`<sup>Required</sup> <a name="IdleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay"></a>

```csharp
public string IdleDelay { get; }
```

- *Type:* string

---

##### `NoConnectDelay`<sup>Required</sup> <a name="NoConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay"></a>

```csharp
public string NoConnectDelay { get; }
```

- *Type:* string

---

##### `ShutdownOnIdle`<sup>Required</sup> <a name="ShutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```csharp
public string ShutdownOnIdle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue"></a>

```csharp
public LabServicePlanDefaultAutoShutdown InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---


### LabServicePlanDefaultConnectionOutputReference <a name="LabServicePlanDefaultConnectionOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlanDefaultConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess">ResetClientRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess">ResetClientSshAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess">ResetWebRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess">ResetWebSshAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientRdpAccess` <a name="ResetClientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess"></a>

```csharp
private void ResetClientRdpAccess()
```

##### `ResetClientSshAccess` <a name="ResetClientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess"></a>

```csharp
private void ResetClientSshAccess()
```

##### `ResetWebRdpAccess` <a name="ResetWebRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess"></a>

```csharp
private void ResetWebRdpAccess()
```

##### `ResetWebSshAccess` <a name="ResetWebSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess"></a>

```csharp
private void ResetWebSshAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput">ClientRdpAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput">ClientSshAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput">WebRdpAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput">WebSshAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess">ClientRdpAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess">ClientSshAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess">WebRdpAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess">WebSshAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientRdpAccessInput`<sup>Optional</sup> <a name="ClientRdpAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput"></a>

```csharp
public string ClientRdpAccessInput { get; }
```

- *Type:* string

---

##### `ClientSshAccessInput`<sup>Optional</sup> <a name="ClientSshAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput"></a>

```csharp
public string ClientSshAccessInput { get; }
```

- *Type:* string

---

##### `WebRdpAccessInput`<sup>Optional</sup> <a name="WebRdpAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput"></a>

```csharp
public string WebRdpAccessInput { get; }
```

- *Type:* string

---

##### `WebSshAccessInput`<sup>Optional</sup> <a name="WebSshAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput"></a>

```csharp
public string WebSshAccessInput { get; }
```

- *Type:* string

---

##### `ClientRdpAccess`<sup>Required</sup> <a name="ClientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess"></a>

```csharp
public string ClientRdpAccess { get; }
```

- *Type:* string

---

##### `ClientSshAccess`<sup>Required</sup> <a name="ClientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess"></a>

```csharp
public string ClientSshAccess { get; }
```

- *Type:* string

---

##### `WebRdpAccess`<sup>Required</sup> <a name="WebRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess"></a>

```csharp
public string WebRdpAccess { get; }
```

- *Type:* string

---

##### `WebSshAccess`<sup>Required</sup> <a name="WebSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess"></a>

```csharp
public string WebSshAccess { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue"></a>

```csharp
public LabServicePlanDefaultConnection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---


### LabServicePlanSupportOutputReference <a name="LabServicePlanSupportOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlanSupportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions">ResetInstructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone">ResetPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetInstructions` <a name="ResetInstructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions"></a>

```csharp
private void ResetInstructions()
```

##### `ResetPhone` <a name="ResetPhone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone"></a>

```csharp
private void ResetPhone()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput">InstructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput">PhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions">Instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone">Phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `InstructionsInput`<sup>Optional</sup> <a name="InstructionsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput"></a>

```csharp
public string InstructionsInput { get; }
```

- *Type:* string

---

##### `PhoneInput`<sup>Optional</sup> <a name="PhoneInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput"></a>

```csharp
public string PhoneInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions"></a>

```csharp
public string Instructions { get; }
```

- *Type:* string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone"></a>

```csharp
public string Phone { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue"></a>

```csharp
public LabServicePlanSupport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---


### LabServicePlanTimeoutsOutputReference <a name="LabServicePlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServicePlanTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




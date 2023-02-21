# `dataAzurermMaintenanceConfiguration` Submodule <a name="`dataAzurermMaintenanceConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMaintenanceConfiguration <a name="DataAzurermMaintenanceConfiguration" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration azurerm_maintenance_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfiguration(Construct Scope, string Id, DataAzurermMaintenanceConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig">DataAzurermMaintenanceConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig">DataAzurermMaintenanceConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermMaintenanceConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMaintenanceConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMaintenanceConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMaintenanceConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.inGuestUserPatchMode">InGuestUserPatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.installPatches">InstallPatches</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList">DataAzurermMaintenanceConfigurationInstallPatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.properties">Properties</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference">DataAzurermMaintenanceConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.window">Window</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList">DataAzurermMaintenanceConfigurationWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InGuestUserPatchMode`<sup>Required</sup> <a name="InGuestUserPatchMode" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.inGuestUserPatchMode"></a>

```csharp
public string InGuestUserPatchMode { get; }
```

- *Type:* string

---

##### `InstallPatches`<sup>Required</sup> <a name="InstallPatches" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.installPatches"></a>

```csharp
public DataAzurermMaintenanceConfigurationInstallPatchesList InstallPatches { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList">DataAzurermMaintenanceConfigurationInstallPatchesList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.properties"></a>

```csharp
public StringMap Properties { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.timeouts"></a>

```csharp
public DataAzurermMaintenanceConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference">DataAzurermMaintenanceConfigurationTimeoutsOutputReference</a>

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.window"></a>

```csharp
public DataAzurermMaintenanceConfigurationWindowList Window { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList">DataAzurermMaintenanceConfigurationWindowList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMaintenanceConfigurationConfig <a name="DataAzurermMaintenanceConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermMaintenanceConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration#name DataAzurermMaintenanceConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration#resource_group_name DataAzurermMaintenanceConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration#id DataAzurermMaintenanceConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration#name DataAzurermMaintenanceConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration#resource_group_name DataAzurermMaintenanceConfiguration#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration#id DataAzurermMaintenanceConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.timeouts"></a>

```csharp
public DataAzurermMaintenanceConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration#timeouts DataAzurermMaintenanceConfiguration#timeouts}

---

### DataAzurermMaintenanceConfigurationInstallPatches <a name="DataAzurermMaintenanceConfigurationInstallPatches" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationInstallPatches {

};
```


### DataAzurermMaintenanceConfigurationInstallPatchesLinux <a name="DataAzurermMaintenanceConfigurationInstallPatchesLinux" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinux.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationInstallPatchesLinux {

};
```


### DataAzurermMaintenanceConfigurationInstallPatchesWindows <a name="DataAzurermMaintenanceConfigurationInstallPatchesWindows" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindows.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationInstallPatchesWindows {

};
```


### DataAzurermMaintenanceConfigurationTimeouts <a name="DataAzurermMaintenanceConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration#read DataAzurermMaintenanceConfiguration#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/maintenance_configuration#read DataAzurermMaintenanceConfiguration#read}.

---

### DataAzurermMaintenanceConfigurationWindow <a name="DataAzurermMaintenanceConfigurationWindow" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationWindow {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMaintenanceConfigurationInstallPatchesLinuxList <a name="DataAzurermMaintenanceConfigurationInstallPatchesLinuxList" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationInstallPatchesLinuxList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.get"></a>

```csharp
private DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference <a name="DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude">ClassificationsToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude">PackageNamesMaskToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude">PackageNamesMaskToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinux">DataAzurermMaintenanceConfigurationInstallPatchesLinux</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationsToInclude`<sup>Required</sup> <a name="ClassificationsToInclude" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude"></a>

```csharp
public string[] ClassificationsToInclude { get; }
```

- *Type:* string[]

---

##### `PackageNamesMaskToExclude`<sup>Required</sup> <a name="PackageNamesMaskToExclude" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude"></a>

```csharp
public string[] PackageNamesMaskToExclude { get; }
```

- *Type:* string[]

---

##### `PackageNamesMaskToInclude`<sup>Required</sup> <a name="PackageNamesMaskToInclude" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude"></a>

```csharp
public string[] PackageNamesMaskToInclude { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMaintenanceConfigurationInstallPatchesLinux InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinux">DataAzurermMaintenanceConfigurationInstallPatchesLinux</a>

---


### DataAzurermMaintenanceConfigurationInstallPatchesList <a name="DataAzurermMaintenanceConfigurationInstallPatchesList" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationInstallPatchesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.get"></a>

```csharp
private DataAzurermMaintenanceConfigurationInstallPatchesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMaintenanceConfigurationInstallPatchesOutputReference <a name="DataAzurermMaintenanceConfigurationInstallPatchesOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationInstallPatchesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.linux">Linux</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList">DataAzurermMaintenanceConfigurationInstallPatchesLinuxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.reboot">Reboot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.windows">Windows</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList">DataAzurermMaintenanceConfigurationInstallPatchesWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatches">DataAzurermMaintenanceConfigurationInstallPatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Linux`<sup>Required</sup> <a name="Linux" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.linux"></a>

```csharp
public DataAzurermMaintenanceConfigurationInstallPatchesLinuxList Linux { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList">DataAzurermMaintenanceConfigurationInstallPatchesLinuxList</a>

---

##### `Reboot`<sup>Required</sup> <a name="Reboot" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.reboot"></a>

```csharp
public string Reboot { get; }
```

- *Type:* string

---

##### `Windows`<sup>Required</sup> <a name="Windows" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.windows"></a>

```csharp
public DataAzurermMaintenanceConfigurationInstallPatchesWindowsList Windows { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList">DataAzurermMaintenanceConfigurationInstallPatchesWindowsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMaintenanceConfigurationInstallPatches InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatches">DataAzurermMaintenanceConfigurationInstallPatches</a>

---


### DataAzurermMaintenanceConfigurationInstallPatchesWindowsList <a name="DataAzurermMaintenanceConfigurationInstallPatchesWindowsList" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationInstallPatchesWindowsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.get"></a>

```csharp
private DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference <a name="DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude">ClassificationsToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude">KbNumbersToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude">KbNumbersToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindows">DataAzurermMaintenanceConfigurationInstallPatchesWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationsToInclude`<sup>Required</sup> <a name="ClassificationsToInclude" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude"></a>

```csharp
public string[] ClassificationsToInclude { get; }
```

- *Type:* string[]

---

##### `KbNumbersToExclude`<sup>Required</sup> <a name="KbNumbersToExclude" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude"></a>

```csharp
public string[] KbNumbersToExclude { get; }
```

- *Type:* string[]

---

##### `KbNumbersToInclude`<sup>Required</sup> <a name="KbNumbersToInclude" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude"></a>

```csharp
public string[] KbNumbersToInclude { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMaintenanceConfigurationInstallPatchesWindows InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindows">DataAzurermMaintenanceConfigurationInstallPatchesWindows</a>

---


### DataAzurermMaintenanceConfigurationTimeoutsOutputReference <a name="DataAzurermMaintenanceConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAzurermMaintenanceConfigurationWindowList <a name="DataAzurermMaintenanceConfigurationWindowList" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.get"></a>

```csharp
private DataAzurermMaintenanceConfigurationWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMaintenanceConfigurationWindowOutputReference <a name="DataAzurermMaintenanceConfigurationWindowOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMaintenanceConfigurationWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.expirationDateTime">ExpirationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.recurEvery">RecurEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.startDateTime">StartDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindow">DataAzurermMaintenanceConfigurationWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `ExpirationDateTime`<sup>Required</sup> <a name="ExpirationDateTime" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.expirationDateTime"></a>

```csharp
public string ExpirationDateTime { get; }
```

- *Type:* string

---

##### `RecurEvery`<sup>Required</sup> <a name="RecurEvery" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.recurEvery"></a>

```csharp
public string RecurEvery { get; }
```

- *Type:* string

---

##### `StartDateTime`<sup>Required</sup> <a name="StartDateTime" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.startDateTime"></a>

```csharp
public string StartDateTime { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMaintenanceConfigurationWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindow">DataAzurermMaintenanceConfigurationWindow</a>

---




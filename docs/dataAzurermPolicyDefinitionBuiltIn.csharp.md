# `dataAzurermPolicyDefinitionBuiltIn` Submodule <a name="`dataAzurermPolicyDefinitionBuiltIn` Submodule" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPolicyDefinitionBuiltIn <a name="DataAzurermPolicyDefinitionBuiltIn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in azurerm_policy_definition_built_in}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPolicyDefinitionBuiltIn(Construct Scope, string Id, DataAzurermPolicyDefinitionBuiltInConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig">DataAzurermPolicyDefinitionBuiltInConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig">DataAzurermPolicyDefinitionBuiltInConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetManagementGroupName">ResetManagementGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermPolicyDefinitionBuiltInTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagementGroupName` <a name="ResetManagementGroupName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetManagementGroupName"></a>

```csharp
private void ResetManagementGroupName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPolicyDefinitionBuiltIn resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPolicyDefinitionBuiltIn.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPolicyDefinitionBuiltIn.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPolicyDefinitionBuiltIn.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPolicyDefinitionBuiltIn.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermPolicyDefinitionBuiltIn resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPolicyDefinitionBuiltIn to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPolicyDefinitionBuiltIn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPolicyDefinitionBuiltIn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyRule">PolicyRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.roleDefinitionIds">RoleDefinitionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference">DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupNameInput">ManagementGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupName">ManagementGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `PolicyRule`<sup>Required</sup> <a name="PolicyRule" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyRule"></a>

```csharp
public string PolicyRule { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `RoleDefinitionIds`<sup>Required</sup> <a name="RoleDefinitionIds" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.roleDefinitionIds"></a>

```csharp
public string[] RoleDefinitionIds { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeouts"></a>

```csharp
public DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference">DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementGroupNameInput`<sup>Optional</sup> <a name="ManagementGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupNameInput"></a>

```csharp
public string ManagementGroupNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementGroupName`<sup>Required</sup> <a name="ManagementGroupName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupName"></a>

```csharp
public string ManagementGroupName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPolicyDefinitionBuiltInConfig <a name="DataAzurermPolicyDefinitionBuiltInConfig" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPolicyDefinitionBuiltInConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName = null,
    string Id = null,
    string ManagementGroupName = null,
    string Name = null,
    DataAzurermPolicyDefinitionBuiltInTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#display_name DataAzurermPolicyDefinitionBuiltIn#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#id DataAzurermPolicyDefinitionBuiltIn#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.managementGroupName">ManagementGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#management_group_name DataAzurermPolicyDefinitionBuiltIn#management_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#name DataAzurermPolicyDefinitionBuiltIn#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#display_name DataAzurermPolicyDefinitionBuiltIn#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#id DataAzurermPolicyDefinitionBuiltIn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementGroupName`<sup>Optional</sup> <a name="ManagementGroupName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.managementGroupName"></a>

```csharp
public string ManagementGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#management_group_name DataAzurermPolicyDefinitionBuiltIn#management_group_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#name DataAzurermPolicyDefinitionBuiltIn#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.timeouts"></a>

```csharp
public DataAzurermPolicyDefinitionBuiltInTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#timeouts DataAzurermPolicyDefinitionBuiltIn#timeouts}

---

### DataAzurermPolicyDefinitionBuiltInTimeouts <a name="DataAzurermPolicyDefinitionBuiltInTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPolicyDefinitionBuiltInTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#read DataAzurermPolicyDefinitionBuiltIn#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/policy_definition_built_in#read DataAzurermPolicyDefinitionBuiltIn#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference <a name="DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




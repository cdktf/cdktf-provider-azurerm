# `dataAzurermPrivateLinkServiceEndpointConnections` Submodule <a name="`dataAzurermPrivateLinkServiceEndpointConnections` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateLinkServiceEndpointConnections <a name="DataAzurermPrivateLinkServiceEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections azurerm_private_link_service_endpoint_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateLinkServiceEndpointConnections(Construct Scope, string Id, DataAzurermPrivateLinkServiceEndpointConnectionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig">DataAzurermPrivateLinkServiceEndpointConnectionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig">DataAzurermPrivateLinkServiceEndpointConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPrivateLinkServiceEndpointConnections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateLinkServiceEndpointConnections.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateLinkServiceEndpointConnections.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateLinkServiceEndpointConnections.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateLinkServiceEndpointConnections.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermPrivateLinkServiceEndpointConnections resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPrivateLinkServiceEndpointConnections to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPrivateLinkServiceEndpointConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateLinkServiceEndpointConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.privateEndpointConnections">PrivateEndpointConnections</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference">DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PrivateEndpointConnections`<sup>Required</sup> <a name="PrivateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.privateEndpointConnections"></a>

```csharp
public DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList PrivateEndpointConnections { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeouts"></a>

```csharp
public DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference">DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateLinkServiceEndpointConnectionsConfig <a name="DataAzurermPrivateLinkServiceEndpointConnectionsConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateLinkServiceEndpointConnectionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ResourceGroupName,
    string ServiceId,
    string Id = null,
    DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#resource_group_name DataAzurermPrivateLinkServiceEndpointConnections#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#service_id DataAzurermPrivateLinkServiceEndpointConnections#service_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#id DataAzurermPrivateLinkServiceEndpointConnections#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#resource_group_name DataAzurermPrivateLinkServiceEndpointConnections#resource_group_name}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#service_id DataAzurermPrivateLinkServiceEndpointConnections#service_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#id DataAzurermPrivateLinkServiceEndpointConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.timeouts"></a>

```csharp
public DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#timeouts DataAzurermPrivateLinkServiceEndpointConnections#timeouts}

---

### DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections <a name="DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections {

};
```


### DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts <a name="DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#read DataAzurermPrivateLinkServiceEndpointConnections#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/private_link_service_endpoint_connections#read DataAzurermPrivateLinkServiceEndpointConnections#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList <a name="DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.get"></a>

```csharp
private DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference <a name="DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.actionRequired">ActionRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointName">PrivateEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionRequired`<sup>Required</sup> <a name="ActionRequired" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.actionRequired"></a>

```csharp
public string ActionRequired { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

##### `PrivateEndpointName`<sup>Required</sup> <a name="PrivateEndpointName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointName"></a>

```csharp
public string PrivateEndpointName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections</a>

---


### DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference <a name="DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




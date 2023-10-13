# `azurerm_network_connection_monitor`

Refer to the Terraform Registory for docs: [`azurerm_network_connection_monitor`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor).

# `networkConnectionMonitor` Submodule <a name="`networkConnectionMonitor` Submodule" id="@cdktf/provider-azurerm.networkConnectionMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectionMonitor <a name="NetworkConnectionMonitor" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor azurerm_network_connection_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitor(Construct Scope, string Id, NetworkConnectionMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig">NetworkConnectionMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig">NetworkConnectionMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestConfiguration">PutTestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestGroup">PutTestGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOutputWorkspaceResourceIds">ResetOutputWorkspaceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putEndpoint"></a>

```csharp
private void PutEndpoint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putEndpoint.parameter.value"></a>

- *Type:* object

---

##### `PutTestConfiguration` <a name="PutTestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestConfiguration"></a>

```csharp
private void PutTestConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTestGroup` <a name="PutTestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestGroup"></a>

```csharp
private void PutTestGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestGroup.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkConnectionMonitorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetOutputWorkspaceResourceIds` <a name="ResetOutputWorkspaceResourceIds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOutputWorkspaceResourceIds"></a>

```csharp
private void ResetOutputWorkspaceResourceIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkConnectionMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkConnectionMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkConnectionMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList">NetworkConnectionMonitorEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfiguration">TestConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList">NetworkConnectionMonitorTestConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroup">TestGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList">NetworkConnectionMonitorTestGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference">NetworkConnectionMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpointInput">EndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherIdInput">NetworkWatcherIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIdsInput">OutputWorkspaceResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfigurationInput">TestConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroupInput">TestGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherId">NetworkWatcherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIds">OutputWorkspaceResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpoint"></a>

```csharp
public NetworkConnectionMonitorEndpointList Endpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList">NetworkConnectionMonitorEndpointList</a>

---

##### `TestConfiguration`<sup>Required</sup> <a name="TestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfiguration"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationList TestConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList">NetworkConnectionMonitorTestConfigurationList</a>

---

##### `TestGroup`<sup>Required</sup> <a name="TestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroup"></a>

```csharp
public NetworkConnectionMonitorTestGroupList TestGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList">NetworkConnectionMonitorTestGroupList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeouts"></a>

```csharp
public NetworkConnectionMonitorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference">NetworkConnectionMonitorTimeoutsOutputReference</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpointInput"></a>

```csharp
public object EndpointInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkWatcherIdInput`<sup>Optional</sup> <a name="NetworkWatcherIdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherIdInput"></a>

```csharp
public string NetworkWatcherIdInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `OutputWorkspaceResourceIdsInput`<sup>Optional</sup> <a name="OutputWorkspaceResourceIdsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIdsInput"></a>

```csharp
public string[] OutputWorkspaceResourceIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TestConfigurationInput`<sup>Optional</sup> <a name="TestConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfigurationInput"></a>

```csharp
public object TestConfigurationInput { get; }
```

- *Type:* object

---

##### `TestGroupInput`<sup>Optional</sup> <a name="TestGroupInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroupInput"></a>

```csharp
public object TestGroupInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkWatcherId`<sup>Required</sup> <a name="NetworkWatcherId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherId"></a>

```csharp
public string NetworkWatcherId { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `OutputWorkspaceResourceIds`<sup>Required</sup> <a name="OutputWorkspaceResourceIds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIds"></a>

```csharp
public string[] OutputWorkspaceResourceIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectionMonitorConfig <a name="NetworkConnectionMonitorConfig" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Endpoint,
    string Location,
    string Name,
    string NetworkWatcherId,
    object TestConfiguration,
    object TestGroup,
    string Id = null,
    string Notes = null,
    string[] OutputWorkspaceResourceIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    NetworkConnectionMonitorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.endpoint">Endpoint</a></code> | <code>object</code> | endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#location NetworkConnectionMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.networkWatcherId">NetworkWatcherId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#network_watcher_id NetworkConnectionMonitor#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testConfiguration">TestConfiguration</a></code> | <code>object</code> | test_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testGroup">TestGroup</a></code> | <code>object</code> | test_group block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#id NetworkConnectionMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.notes">Notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#notes NetworkConnectionMonitor#notes}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.outputWorkspaceResourceIds">OutputWorkspaceResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#output_workspace_resource_ids NetworkConnectionMonitor#output_workspace_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#tags NetworkConnectionMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.endpoint"></a>

```csharp
public object Endpoint { get; set; }
```

- *Type:* object

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#endpoint NetworkConnectionMonitor#endpoint}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#location NetworkConnectionMonitor#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `NetworkWatcherId`<sup>Required</sup> <a name="NetworkWatcherId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.networkWatcherId"></a>

```csharp
public string NetworkWatcherId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#network_watcher_id NetworkConnectionMonitor#network_watcher_id}.

---

##### `TestConfiguration`<sup>Required</sup> <a name="TestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testConfiguration"></a>

```csharp
public object TestConfiguration { get; set; }
```

- *Type:* object

test_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#test_configuration NetworkConnectionMonitor#test_configuration}

---

##### `TestGroup`<sup>Required</sup> <a name="TestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testGroup"></a>

```csharp
public object TestGroup { get; set; }
```

- *Type:* object

test_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#test_group NetworkConnectionMonitor#test_group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#id NetworkConnectionMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#notes NetworkConnectionMonitor#notes}.

---

##### `OutputWorkspaceResourceIds`<sup>Optional</sup> <a name="OutputWorkspaceResourceIds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.outputWorkspaceResourceIds"></a>

```csharp
public string[] OutputWorkspaceResourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#output_workspace_resource_ids NetworkConnectionMonitor#output_workspace_resource_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#tags NetworkConnectionMonitor#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.timeouts"></a>

```csharp
public NetworkConnectionMonitorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#timeouts NetworkConnectionMonitor#timeouts}

---

### NetworkConnectionMonitorEndpoint <a name="NetworkConnectionMonitorEndpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorEndpoint {
    string Name,
    string Address = null,
    string CoverageLevel = null,
    string[] ExcludedIpAddresses = null,
    NetworkConnectionMonitorEndpointFilter Filter = null,
    string[] IncludedIpAddresses = null,
    string TargetResourceId = null,
    string TargetResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.coverageLevel">CoverageLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#coverage_level NetworkConnectionMonitor#coverage_level}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.excludedIpAddresses">ExcludedIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#excluded_ip_addresses NetworkConnectionMonitor#excluded_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.includedIpAddresses">IncludedIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#included_ip_addresses NetworkConnectionMonitor#included_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#target_resource_id NetworkConnectionMonitor#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#target_resource_type NetworkConnectionMonitor#target_resource_type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}.

---

##### `CoverageLevel`<sup>Optional</sup> <a name="CoverageLevel" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.coverageLevel"></a>

```csharp
public string CoverageLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#coverage_level NetworkConnectionMonitor#coverage_level}.

---

##### `ExcludedIpAddresses`<sup>Optional</sup> <a name="ExcludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.excludedIpAddresses"></a>

```csharp
public string[] ExcludedIpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#excluded_ip_addresses NetworkConnectionMonitor#excluded_ip_addresses}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.filter"></a>

```csharp
public NetworkConnectionMonitorEndpointFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#filter NetworkConnectionMonitor#filter}

---

##### `IncludedIpAddresses`<sup>Optional</sup> <a name="IncludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.includedIpAddresses"></a>

```csharp
public string[] IncludedIpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#included_ip_addresses NetworkConnectionMonitor#included_ip_addresses}.

---

##### `TargetResourceId`<sup>Optional</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#target_resource_id NetworkConnectionMonitor#target_resource_id}.

---

##### `TargetResourceType`<sup>Optional</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#target_resource_type NetworkConnectionMonitor#target_resource_type}.

---

### NetworkConnectionMonitorEndpointFilter <a name="NetworkConnectionMonitorEndpointFilter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorEndpointFilter {
    object Item = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.item">Item</a></code> | <code>object</code> | item block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}. |

---

##### `Item`<sup>Optional</sup> <a name="Item" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.item"></a>

```csharp
public object Item { get; set; }
```

- *Type:* object

item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#item NetworkConnectionMonitor#item}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}.

---

### NetworkConnectionMonitorEndpointFilterItem <a name="NetworkConnectionMonitorEndpointFilterItem" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorEndpointFilterItem {
    string Address = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}.

---

### NetworkConnectionMonitorTestConfiguration <a name="NetworkConnectionMonitorTestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfiguration {
    string Name,
    string Protocol,
    NetworkConnectionMonitorTestConfigurationHttpConfiguration HttpConfiguration = null,
    NetworkConnectionMonitorTestConfigurationIcmpConfiguration IcmpConfiguration = null,
    string PreferredIpVersion = null,
    NetworkConnectionMonitorTestConfigurationSuccessThreshold SuccessThreshold = null,
    NetworkConnectionMonitorTestConfigurationTcpConfiguration TcpConfiguration = null,
    double TestFrequencyInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#protocol NetworkConnectionMonitor#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.httpConfiguration">HttpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a></code> | http_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.icmpConfiguration">IcmpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a></code> | icmp_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.preferredIpVersion">PreferredIpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#preferred_ip_version NetworkConnectionMonitor#preferred_ip_version}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.successThreshold">SuccessThreshold</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a></code> | success_threshold block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.tcpConfiguration">TcpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a></code> | tcp_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.testFrequencyInSeconds">TestFrequencyInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#test_frequency_in_seconds NetworkConnectionMonitor#test_frequency_in_seconds}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#protocol NetworkConnectionMonitor#protocol}.

---

##### `HttpConfiguration`<sup>Optional</sup> <a name="HttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.httpConfiguration"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationHttpConfiguration HttpConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

http_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#http_configuration NetworkConnectionMonitor#http_configuration}

---

##### `IcmpConfiguration`<sup>Optional</sup> <a name="IcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.icmpConfiguration"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationIcmpConfiguration IcmpConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

icmp_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#icmp_configuration NetworkConnectionMonitor#icmp_configuration}

---

##### `PreferredIpVersion`<sup>Optional</sup> <a name="PreferredIpVersion" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.preferredIpVersion"></a>

```csharp
public string PreferredIpVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#preferred_ip_version NetworkConnectionMonitor#preferred_ip_version}.

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.successThreshold"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationSuccessThreshold SuccessThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

success_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#success_threshold NetworkConnectionMonitor#success_threshold}

---

##### `TcpConfiguration`<sup>Optional</sup> <a name="TcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.tcpConfiguration"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationTcpConfiguration TcpConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

tcp_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#tcp_configuration NetworkConnectionMonitor#tcp_configuration}

---

##### `TestFrequencyInSeconds`<sup>Optional</sup> <a name="TestFrequencyInSeconds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.testFrequencyInSeconds"></a>

```csharp
public double TestFrequencyInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#test_frequency_in_seconds NetworkConnectionMonitor#test_frequency_in_seconds}.

---

### NetworkConnectionMonitorTestConfigurationHttpConfiguration <a name="NetworkConnectionMonitorTestConfigurationHttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationHttpConfiguration {
    string Method = null,
    string Path = null,
    double Port = null,
    object PreferHttps = null,
    object RequestHeader = null,
    string[] ValidStatusCodeRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.method">Method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#method NetworkConnectionMonitor#method}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#path NetworkConnectionMonitor#path}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.preferHttps">PreferHttps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#prefer_https NetworkConnectionMonitor#prefer_https}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.requestHeader">RequestHeader</a></code> | <code>object</code> | request_header block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.validStatusCodeRanges">ValidStatusCodeRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#valid_status_code_ranges NetworkConnectionMonitor#valid_status_code_ranges}. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#method NetworkConnectionMonitor#method}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#path NetworkConnectionMonitor#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}.

---

##### `PreferHttps`<sup>Optional</sup> <a name="PreferHttps" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.preferHttps"></a>

```csharp
public object PreferHttps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#prefer_https NetworkConnectionMonitor#prefer_https}.

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.requestHeader"></a>

```csharp
public object RequestHeader { get; set; }
```

- *Type:* object

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#request_header NetworkConnectionMonitor#request_header}

---

##### `ValidStatusCodeRanges`<sup>Optional</sup> <a name="ValidStatusCodeRanges" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.validStatusCodeRanges"></a>

```csharp
public string[] ValidStatusCodeRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#valid_status_code_ranges NetworkConnectionMonitor#valid_status_code_ranges}.

---

### NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#value NetworkConnectionMonitor#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#value NetworkConnectionMonitor#value}.

---

### NetworkConnectionMonitorTestConfigurationIcmpConfiguration <a name="NetworkConnectionMonitorTestConfigurationIcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationIcmpConfiguration {
    object TraceRouteEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration.property.traceRouteEnabled">TraceRouteEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}. |

---

##### `TraceRouteEnabled`<sup>Optional</sup> <a name="TraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration.property.traceRouteEnabled"></a>

```csharp
public object TraceRouteEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}.

---

### NetworkConnectionMonitorTestConfigurationSuccessThreshold <a name="NetworkConnectionMonitorTestConfigurationSuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationSuccessThreshold {
    double ChecksFailedPercent = null,
    double RoundTripTimeMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.checksFailedPercent">ChecksFailedPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#checks_failed_percent NetworkConnectionMonitor#checks_failed_percent}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.roundTripTimeMs">RoundTripTimeMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#round_trip_time_ms NetworkConnectionMonitor#round_trip_time_ms}. |

---

##### `ChecksFailedPercent`<sup>Optional</sup> <a name="ChecksFailedPercent" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.checksFailedPercent"></a>

```csharp
public double ChecksFailedPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#checks_failed_percent NetworkConnectionMonitor#checks_failed_percent}.

---

##### `RoundTripTimeMs`<sup>Optional</sup> <a name="RoundTripTimeMs" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.roundTripTimeMs"></a>

```csharp
public double RoundTripTimeMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#round_trip_time_ms NetworkConnectionMonitor#round_trip_time_ms}.

---

### NetworkConnectionMonitorTestConfigurationTcpConfiguration <a name="NetworkConnectionMonitorTestConfigurationTcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationTcpConfiguration {
    double Port,
    string DestinationPortBehavior = null,
    object TraceRouteEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.destinationPortBehavior">DestinationPortBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#destination_port_behavior NetworkConnectionMonitor#destination_port_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.traceRouteEnabled">TraceRouteEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}.

---

##### `DestinationPortBehavior`<sup>Optional</sup> <a name="DestinationPortBehavior" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.destinationPortBehavior"></a>

```csharp
public string DestinationPortBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#destination_port_behavior NetworkConnectionMonitor#destination_port_behavior}.

---

##### `TraceRouteEnabled`<sup>Optional</sup> <a name="TraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.traceRouteEnabled"></a>

```csharp
public object TraceRouteEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}.

---

### NetworkConnectionMonitorTestGroup <a name="NetworkConnectionMonitorTestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestGroup {
    string[] DestinationEndpoints,
    string Name,
    string[] SourceEndpoints,
    string[] TestConfigurationNames,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.destinationEndpoints">DestinationEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#destination_endpoints NetworkConnectionMonitor#destination_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.sourceEndpoints">SourceEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#source_endpoints NetworkConnectionMonitor#source_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.testConfigurationNames">TestConfigurationNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#test_configuration_names NetworkConnectionMonitor#test_configuration_names}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#enabled NetworkConnectionMonitor#enabled}. |

---

##### `DestinationEndpoints`<sup>Required</sup> <a name="DestinationEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.destinationEndpoints"></a>

```csharp
public string[] DestinationEndpoints { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#destination_endpoints NetworkConnectionMonitor#destination_endpoints}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `SourceEndpoints`<sup>Required</sup> <a name="SourceEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.sourceEndpoints"></a>

```csharp
public string[] SourceEndpoints { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#source_endpoints NetworkConnectionMonitor#source_endpoints}.

---

##### `TestConfigurationNames`<sup>Required</sup> <a name="TestConfigurationNames" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.testConfigurationNames"></a>

```csharp
public string[] TestConfigurationNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#test_configuration_names NetworkConnectionMonitor#test_configuration_names}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#enabled NetworkConnectionMonitor#enabled}.

---

### NetworkConnectionMonitorTimeouts <a name="NetworkConnectionMonitorTimeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#create NetworkConnectionMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#delete NetworkConnectionMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#read NetworkConnectionMonitor#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#update NetworkConnectionMonitor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#create NetworkConnectionMonitor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#delete NetworkConnectionMonitor#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#read NetworkConnectionMonitor#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/network_connection_monitor#update NetworkConnectionMonitor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectionMonitorEndpointFilterItemList <a name="NetworkConnectionMonitorEndpointFilterItemList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorEndpointFilterItemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.get"></a>

```csharp
private NetworkConnectionMonitorEndpointFilterItemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorEndpointFilterItemOutputReference <a name="NetworkConnectionMonitorEndpointFilterItemOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorEndpointFilterItemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorEndpointFilterOutputReference <a name="NetworkConnectionMonitorEndpointFilterOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorEndpointFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.putItem">PutItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetItem">ResetItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItem` <a name="PutItem" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.putItem"></a>

```csharp
private void PutItem(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.putItem.parameter.value"></a>

- *Type:* object

---

##### `ResetItem` <a name="ResetItem" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetItem"></a>

```csharp
private void ResetItem()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.item">Item</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList">NetworkConnectionMonitorEndpointFilterItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.itemInput">ItemInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Item`<sup>Required</sup> <a name="Item" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.item"></a>

```csharp
public NetworkConnectionMonitorEndpointFilterItemList Item { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList">NetworkConnectionMonitorEndpointFilterItemList</a>

---

##### `ItemInput`<sup>Optional</sup> <a name="ItemInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.itemInput"></a>

```csharp
public object ItemInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.internalValue"></a>

```csharp
public NetworkConnectionMonitorEndpointFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

---


### NetworkConnectionMonitorEndpointList <a name="NetworkConnectionMonitorEndpointList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.get"></a>

```csharp
private NetworkConnectionMonitorEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorEndpointOutputReference <a name="NetworkConnectionMonitorEndpointOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetCoverageLevel">ResetCoverageLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetExcludedIpAddresses">ResetExcludedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetIncludedIpAddresses">ResetIncludedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceId">ResetTargetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceType">ResetTargetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.putFilter"></a>

```csharp
private void PutFilter(NetworkConnectionMonitorEndpointFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetCoverageLevel` <a name="ResetCoverageLevel" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetCoverageLevel"></a>

```csharp
private void ResetCoverageLevel()
```

##### `ResetExcludedIpAddresses` <a name="ResetExcludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetExcludedIpAddresses"></a>

```csharp
private void ResetExcludedIpAddresses()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetIncludedIpAddresses` <a name="ResetIncludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetIncludedIpAddresses"></a>

```csharp
private void ResetIncludedIpAddresses()
```

##### `ResetTargetResourceId` <a name="ResetTargetResourceId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceId"></a>

```csharp
private void ResetTargetResourceId()
```

##### `ResetTargetResourceType` <a name="ResetTargetResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceType"></a>

```csharp
private void ResetTargetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference">NetworkConnectionMonitorEndpointFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevelInput">CoverageLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddressesInput">ExcludedIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddressesInput">IncludedIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevel">CoverageLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddresses">ExcludedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddresses">IncludedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filter"></a>

```csharp
public NetworkConnectionMonitorEndpointFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference">NetworkConnectionMonitorEndpointFilterOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `CoverageLevelInput`<sup>Optional</sup> <a name="CoverageLevelInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevelInput"></a>

```csharp
public string CoverageLevelInput { get; }
```

- *Type:* string

---

##### `ExcludedIpAddressesInput`<sup>Optional</sup> <a name="ExcludedIpAddressesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddressesInput"></a>

```csharp
public string[] ExcludedIpAddressesInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filterInput"></a>

```csharp
public NetworkConnectionMonitorEndpointFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

---

##### `IncludedIpAddressesInput`<sup>Optional</sup> <a name="IncludedIpAddressesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddressesInput"></a>

```csharp
public string[] IncludedIpAddressesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceTypeInput"></a>

```csharp
public string TargetResourceTypeInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `CoverageLevel`<sup>Required</sup> <a name="CoverageLevel" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevel"></a>

```csharp
public string CoverageLevel { get; }
```

- *Type:* string

---

##### `ExcludedIpAddresses`<sup>Required</sup> <a name="ExcludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddresses"></a>

```csharp
public string[] ExcludedIpAddresses { get; }
```

- *Type:* string[]

---

##### `IncludedIpAddresses`<sup>Required</sup> <a name="IncludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddresses"></a>

```csharp
public string[] IncludedIpAddresses { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPreferHttps">ResetPreferHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetValidStatusCodeRanges">ResetValidStatusCodeRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.putRequestHeader"></a>

```csharp
private void PutRequestHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreferHttps` <a name="ResetPreferHttps" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPreferHttps"></a>

```csharp
private void ResetPreferHttps()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetRequestHeader"></a>

```csharp
private void ResetRequestHeader()
```

##### `ResetValidStatusCodeRanges` <a name="ResetValidStatusCodeRanges" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetValidStatusCodeRanges"></a>

```csharp
private void ResetValidStatusCodeRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttpsInput">PreferHttpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRangesInput">ValidStatusCodeRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttps">PreferHttps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRanges">ValidStatusCodeRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeader"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList RequestHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList</a>

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreferHttpsInput`<sup>Optional</sup> <a name="PreferHttpsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttpsInput"></a>

```csharp
public object PreferHttpsInput { get; }
```

- *Type:* object

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeaderInput"></a>

```csharp
public object RequestHeaderInput { get; }
```

- *Type:* object

---

##### `ValidStatusCodeRangesInput`<sup>Optional</sup> <a name="ValidStatusCodeRangesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRangesInput"></a>

```csharp
public string[] ValidStatusCodeRangesInput { get; }
```

- *Type:* string[]

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreferHttps`<sup>Required</sup> <a name="PreferHttps" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttps"></a>

```csharp
public object PreferHttps { get; }
```

- *Type:* object

---

##### `ValidStatusCodeRanges`<sup>Required</sup> <a name="ValidStatusCodeRanges" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRanges"></a>

```csharp
public string[] ValidStatusCodeRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.internalValue"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationHttpConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

---


### NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.get"></a>

```csharp
private NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resetTraceRouteEnabled">ResetTraceRouteEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTraceRouteEnabled` <a name="ResetTraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resetTraceRouteEnabled"></a>

```csharp
private void ResetTraceRouteEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabledInput">TraceRouteEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabled">TraceRouteEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TraceRouteEnabledInput`<sup>Optional</sup> <a name="TraceRouteEnabledInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabledInput"></a>

```csharp
public object TraceRouteEnabledInput { get; }
```

- *Type:* object

---

##### `TraceRouteEnabled`<sup>Required</sup> <a name="TraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabled"></a>

```csharp
public object TraceRouteEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.internalValue"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationIcmpConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

---


### NetworkConnectionMonitorTestConfigurationList <a name="NetworkConnectionMonitorTestConfigurationList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.get"></a>

```csharp
private NetworkConnectionMonitorTestConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorTestConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putHttpConfiguration">PutHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putIcmpConfiguration">PutIcmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putSuccessThreshold">PutSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putTcpConfiguration">PutTcpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetHttpConfiguration">ResetHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetIcmpConfiguration">ResetIcmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetPreferredIpVersion">ResetPreferredIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTcpConfiguration">ResetTcpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTestFrequencyInSeconds">ResetTestFrequencyInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpConfiguration` <a name="PutHttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putHttpConfiguration"></a>

```csharp
private void PutHttpConfiguration(NetworkConnectionMonitorTestConfigurationHttpConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putHttpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

---

##### `PutIcmpConfiguration` <a name="PutIcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putIcmpConfiguration"></a>

```csharp
private void PutIcmpConfiguration(NetworkConnectionMonitorTestConfigurationIcmpConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putIcmpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

---

##### `PutSuccessThreshold` <a name="PutSuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putSuccessThreshold"></a>

```csharp
private void PutSuccessThreshold(NetworkConnectionMonitorTestConfigurationSuccessThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putSuccessThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

---

##### `PutTcpConfiguration` <a name="PutTcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putTcpConfiguration"></a>

```csharp
private void PutTcpConfiguration(NetworkConnectionMonitorTestConfigurationTcpConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putTcpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

---

##### `ResetHttpConfiguration` <a name="ResetHttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetHttpConfiguration"></a>

```csharp
private void ResetHttpConfiguration()
```

##### `ResetIcmpConfiguration` <a name="ResetIcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetIcmpConfiguration"></a>

```csharp
private void ResetIcmpConfiguration()
```

##### `ResetPreferredIpVersion` <a name="ResetPreferredIpVersion" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetPreferredIpVersion"></a>

```csharp
private void ResetPreferredIpVersion()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetSuccessThreshold"></a>

```csharp
private void ResetSuccessThreshold()
```

##### `ResetTcpConfiguration` <a name="ResetTcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTcpConfiguration"></a>

```csharp
private void ResetTcpConfiguration()
```

##### `ResetTestFrequencyInSeconds` <a name="ResetTestFrequencyInSeconds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTestFrequencyInSeconds"></a>

```csharp
private void ResetTestFrequencyInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfiguration">HttpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfiguration">IcmpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference">NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfiguration">TcpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfigurationInput">HttpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfigurationInput">IcmpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersionInput">PreferredIpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfigurationInput">TcpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSecondsInput">TestFrequencyInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersion">PreferredIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSeconds">TestFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpConfiguration`<sup>Required</sup> <a name="HttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfiguration"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference HttpConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference</a>

---

##### `IcmpConfiguration`<sup>Required</sup> <a name="IcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfiguration"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference IcmpConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference</a>

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThreshold"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference SuccessThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference">NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference</a>

---

##### `TcpConfiguration`<sup>Required</sup> <a name="TcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfiguration"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference TcpConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference</a>

---

##### `HttpConfigurationInput`<sup>Optional</sup> <a name="HttpConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfigurationInput"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationHttpConfiguration HttpConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

---

##### `IcmpConfigurationInput`<sup>Optional</sup> <a name="IcmpConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfigurationInput"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationIcmpConfiguration IcmpConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreferredIpVersionInput`<sup>Optional</sup> <a name="PreferredIpVersionInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersionInput"></a>

```csharp
public string PreferredIpVersionInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThresholdInput"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationSuccessThreshold SuccessThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

---

##### `TcpConfigurationInput`<sup>Optional</sup> <a name="TcpConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfigurationInput"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationTcpConfiguration TcpConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

---

##### `TestFrequencyInSecondsInput`<sup>Optional</sup> <a name="TestFrequencyInSecondsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSecondsInput"></a>

```csharp
public double TestFrequencyInSecondsInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PreferredIpVersion`<sup>Required</sup> <a name="PreferredIpVersion" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersion"></a>

```csharp
public string PreferredIpVersion { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `TestFrequencyInSeconds`<sup>Required</sup> <a name="TestFrequencyInSeconds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSeconds"></a>

```csharp
public double TestFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference <a name="NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetChecksFailedPercent">ResetChecksFailedPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetRoundTripTimeMs">ResetRoundTripTimeMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChecksFailedPercent` <a name="ResetChecksFailedPercent" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetChecksFailedPercent"></a>

```csharp
private void ResetChecksFailedPercent()
```

##### `ResetRoundTripTimeMs` <a name="ResetRoundTripTimeMs" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetRoundTripTimeMs"></a>

```csharp
private void ResetRoundTripTimeMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercentInput">ChecksFailedPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMsInput">RoundTripTimeMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercent">ChecksFailedPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMs">RoundTripTimeMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChecksFailedPercentInput`<sup>Optional</sup> <a name="ChecksFailedPercentInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercentInput"></a>

```csharp
public double ChecksFailedPercentInput { get; }
```

- *Type:* double

---

##### `RoundTripTimeMsInput`<sup>Optional</sup> <a name="RoundTripTimeMsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMsInput"></a>

```csharp
public double RoundTripTimeMsInput { get; }
```

- *Type:* double

---

##### `ChecksFailedPercent`<sup>Required</sup> <a name="ChecksFailedPercent" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercent"></a>

```csharp
public double ChecksFailedPercent { get; }
```

- *Type:* double

---

##### `RoundTripTimeMs`<sup>Required</sup> <a name="RoundTripTimeMs" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMs"></a>

```csharp
public double RoundTripTimeMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.internalValue"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationSuccessThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

---


### NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetDestinationPortBehavior">ResetDestinationPortBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetTraceRouteEnabled">ResetTraceRouteEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPortBehavior` <a name="ResetDestinationPortBehavior" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetDestinationPortBehavior"></a>

```csharp
private void ResetDestinationPortBehavior()
```

##### `ResetTraceRouteEnabled` <a name="ResetTraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetTraceRouteEnabled"></a>

```csharp
private void ResetTraceRouteEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehaviorInput">DestinationPortBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabledInput">TraceRouteEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehavior">DestinationPortBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabled">TraceRouteEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPortBehaviorInput`<sup>Optional</sup> <a name="DestinationPortBehaviorInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehaviorInput"></a>

```csharp
public string DestinationPortBehaviorInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `TraceRouteEnabledInput`<sup>Optional</sup> <a name="TraceRouteEnabledInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabledInput"></a>

```csharp
public object TraceRouteEnabledInput { get; }
```

- *Type:* object

---

##### `DestinationPortBehavior`<sup>Required</sup> <a name="DestinationPortBehavior" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehavior"></a>

```csharp
public string DestinationPortBehavior { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `TraceRouteEnabled`<sup>Required</sup> <a name="TraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabled"></a>

```csharp
public object TraceRouteEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.internalValue"></a>

```csharp
public NetworkConnectionMonitorTestConfigurationTcpConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

---


### NetworkConnectionMonitorTestGroupList <a name="NetworkConnectionMonitorTestGroupList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.get"></a>

```csharp
private NetworkConnectionMonitorTestGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorTestGroupOutputReference <a name="NetworkConnectionMonitorTestGroupOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTestGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpointsInput">DestinationEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpointsInput">SourceEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNamesInput">TestConfigurationNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpoints">DestinationEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpoints">SourceEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNames">TestConfigurationNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationEndpointsInput`<sup>Optional</sup> <a name="DestinationEndpointsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpointsInput"></a>

```csharp
public string[] DestinationEndpointsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceEndpointsInput`<sup>Optional</sup> <a name="SourceEndpointsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpointsInput"></a>

```csharp
public string[] SourceEndpointsInput { get; }
```

- *Type:* string[]

---

##### `TestConfigurationNamesInput`<sup>Optional</sup> <a name="TestConfigurationNamesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNamesInput"></a>

```csharp
public string[] TestConfigurationNamesInput { get; }
```

- *Type:* string[]

---

##### `DestinationEndpoints`<sup>Required</sup> <a name="DestinationEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpoints"></a>

```csharp
public string[] DestinationEndpoints { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceEndpoints`<sup>Required</sup> <a name="SourceEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpoints"></a>

```csharp
public string[] SourceEndpoints { get; }
```

- *Type:* string[]

---

##### `TestConfigurationNames`<sup>Required</sup> <a name="TestConfigurationNames" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNames"></a>

```csharp
public string[] TestConfigurationNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkConnectionMonitorTimeoutsOutputReference <a name="NetworkConnectionMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkConnectionMonitorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




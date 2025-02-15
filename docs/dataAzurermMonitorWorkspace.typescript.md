# `dataAzurermMonitorWorkspace` Submodule <a name="`dataAzurermMonitorWorkspace` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorWorkspace <a name="DataAzurermMonitorWorkspace" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace azurerm_monitor_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.Initializer"></a>

```typescript
import { dataAzurermMonitorWorkspace } from '@cdktf/provider-azurerm'

new dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace(scope: Construct, id: string, config: DataAzurermMonitorWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig">DataAzurermMonitorWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig">DataAzurermMonitorWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMonitorWorkspaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts">DataAzurermMonitorWorkspaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMonitorWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isConstruct"></a>

```typescript
import { dataAzurermMonitorWorkspace } from '@cdktf/provider-azurerm'

dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isTerraformElement"></a>

```typescript
import { dataAzurermMonitorWorkspace } from '@cdktf/provider-azurerm'

dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isTerraformDataSource"></a>

```typescript
import { dataAzurermMonitorWorkspace } from '@cdktf/provider-azurerm'

dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.generateConfigForImport"></a>

```typescript
import { dataAzurermMonitorWorkspace } from '@cdktf/provider-azurerm'

dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMonitorWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMonitorWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMonitorWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.defaultDataCollectionEndpointId">defaultDataCollectionEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.defaultDataCollectionRuleId">defaultDataCollectionRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.queryEndpoint">queryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference">DataAzurermMonitorWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts">DataAzurermMonitorWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `defaultDataCollectionEndpointId`<sup>Required</sup> <a name="defaultDataCollectionEndpointId" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.defaultDataCollectionEndpointId"></a>

```typescript
public readonly defaultDataCollectionEndpointId: string;
```

- *Type:* string

---

##### `defaultDataCollectionRuleId`<sup>Required</sup> <a name="defaultDataCollectionRuleId" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.defaultDataCollectionRuleId"></a>

```typescript
public readonly defaultDataCollectionRuleId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `queryEndpoint`<sup>Required</sup> <a name="queryEndpoint" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.queryEndpoint"></a>

```typescript
public readonly queryEndpoint: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorWorkspaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference">DataAzurermMonitorWorkspaceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMonitorWorkspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts">DataAzurermMonitorWorkspaceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorWorkspaceConfig <a name="DataAzurermMonitorWorkspaceConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.Initializer"></a>

```typescript
import { dataAzurermMonitorWorkspace } from '@cdktf/provider-azurerm'

const dataAzurermMonitorWorkspaceConfig: dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#name DataAzurermMonitorWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#resource_group_name DataAzurermMonitorWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#id DataAzurermMonitorWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts">DataAzurermMonitorWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#name DataAzurermMonitorWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#resource_group_name DataAzurermMonitorWorkspace#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#id DataAzurermMonitorWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorWorkspaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts">DataAzurermMonitorWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#timeouts DataAzurermMonitorWorkspace#timeouts}

---

### DataAzurermMonitorWorkspaceTimeouts <a name="DataAzurermMonitorWorkspaceTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts.Initializer"></a>

```typescript
import { dataAzurermMonitorWorkspace } from '@cdktf/provider-azurerm'

const dataAzurermMonitorWorkspaceTimeouts: dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#read DataAzurermMonitorWorkspace#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/monitor_workspace#read DataAzurermMonitorWorkspace#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorWorkspaceTimeoutsOutputReference <a name="DataAzurermMonitorWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorWorkspace } from '@cdktf/provider-azurerm'

new dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts">DataAzurermMonitorWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMonitorWorkspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorWorkspace.DataAzurermMonitorWorkspaceTimeouts">DataAzurermMonitorWorkspaceTimeouts</a>

---




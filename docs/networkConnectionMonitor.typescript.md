# `networkConnectionMonitor` Submodule <a name="`networkConnectionMonitor` Submodule" id="@cdktf/provider-azurerm.networkConnectionMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectionMonitor <a name="NetworkConnectionMonitor" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor azurerm_network_connection_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitor(scope: Construct, id: string, config: NetworkConnectionMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig">NetworkConnectionMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig">NetworkConnectionMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestConfiguration">putTestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestGroup">putTestGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOutputWorkspaceResourceIds">resetOutputWorkspaceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putEndpoint"></a>

```typescript
public putEndpoint(value: IResolvable | NetworkConnectionMonitorEndpoint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putEndpoint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint">NetworkConnectionMonitorEndpoint</a>[]

---

##### `putTestConfiguration` <a name="putTestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestConfiguration"></a>

```typescript
public putTestConfiguration(value: IResolvable | NetworkConnectionMonitorTestConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration">NetworkConnectionMonitorTestConfiguration</a>[]

---

##### `putTestGroup` <a name="putTestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestGroup"></a>

```typescript
public putTestGroup(value: IResolvable | NetworkConnectionMonitorTestGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup">NetworkConnectionMonitorTestGroup</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkConnectionMonitorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetOutputWorkspaceResourceIds` <a name="resetOutputWorkspaceResourceIds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOutputWorkspaceResourceIds"></a>

```typescript
public resetOutputWorkspaceResourceIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectionMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isConstruct"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

networkConnectionMonitor.NetworkConnectionMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkConnectionMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectionMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectionMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectionMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList">NetworkConnectionMonitorEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfiguration">testConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList">NetworkConnectionMonitorTestConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroup">testGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList">NetworkConnectionMonitorTestGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference">NetworkConnectionMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpointInput">endpointInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint">NetworkConnectionMonitorEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherIdInput">networkWatcherIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIdsInput">outputWorkspaceResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfigurationInput">testConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration">NetworkConnectionMonitorTestConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroupInput">testGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup">NetworkConnectionMonitorTestGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherId">networkWatcherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIds">outputWorkspaceResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpoint"></a>

```typescript
public readonly endpoint: NetworkConnectionMonitorEndpointList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList">NetworkConnectionMonitorEndpointList</a>

---

##### `testConfiguration`<sup>Required</sup> <a name="testConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfiguration"></a>

```typescript
public readonly testConfiguration: NetworkConnectionMonitorTestConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList">NetworkConnectionMonitorTestConfigurationList</a>

---

##### `testGroup`<sup>Required</sup> <a name="testGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroup"></a>

```typescript
public readonly testGroup: NetworkConnectionMonitorTestGroupList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList">NetworkConnectionMonitorTestGroupList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectionMonitorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference">NetworkConnectionMonitorTimeoutsOutputReference</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpointInput"></a>

```typescript
public readonly endpointInput: IResolvable | NetworkConnectionMonitorEndpoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint">NetworkConnectionMonitorEndpoint</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkWatcherIdInput`<sup>Optional</sup> <a name="networkWatcherIdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherIdInput"></a>

```typescript
public readonly networkWatcherIdInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `outputWorkspaceResourceIdsInput`<sup>Optional</sup> <a name="outputWorkspaceResourceIdsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIdsInput"></a>

```typescript
public readonly outputWorkspaceResourceIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `testConfigurationInput`<sup>Optional</sup> <a name="testConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfigurationInput"></a>

```typescript
public readonly testConfigurationInput: IResolvable | NetworkConnectionMonitorTestConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration">NetworkConnectionMonitorTestConfiguration</a>[]

---

##### `testGroupInput`<sup>Optional</sup> <a name="testGroupInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroupInput"></a>

```typescript
public readonly testGroupInput: IResolvable | NetworkConnectionMonitorTestGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup">NetworkConnectionMonitorTestGroup</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkConnectionMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkWatcherId`<sup>Required</sup> <a name="networkWatcherId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherId"></a>

```typescript
public readonly networkWatcherId: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `outputWorkspaceResourceIds`<sup>Required</sup> <a name="outputWorkspaceResourceIds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIds"></a>

```typescript
public readonly outputWorkspaceResourceIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectionMonitorConfig <a name="NetworkConnectionMonitorConfig" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorConfig: networkConnectionMonitor.NetworkConnectionMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.endpoint">endpoint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint">NetworkConnectionMonitorEndpoint</a>[]</code> | endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#location NetworkConnectionMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.networkWatcherId">networkWatcherId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#network_watcher_id NetworkConnectionMonitor#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testConfiguration">testConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration">NetworkConnectionMonitorTestConfiguration</a>[]</code> | test_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testGroup">testGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup">NetworkConnectionMonitorTestGroup</a>[]</code> | test_group block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#id NetworkConnectionMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.notes">notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#notes NetworkConnectionMonitor#notes}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.outputWorkspaceResourceIds">outputWorkspaceResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#output_workspace_resource_ids NetworkConnectionMonitor#output_workspace_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#tags NetworkConnectionMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.endpoint"></a>

```typescript
public readonly endpoint: IResolvable | NetworkConnectionMonitorEndpoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint">NetworkConnectionMonitorEndpoint</a>[]

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#endpoint NetworkConnectionMonitor#endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#location NetworkConnectionMonitor#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `networkWatcherId`<sup>Required</sup> <a name="networkWatcherId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.networkWatcherId"></a>

```typescript
public readonly networkWatcherId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#network_watcher_id NetworkConnectionMonitor#network_watcher_id}.

---

##### `testConfiguration`<sup>Required</sup> <a name="testConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testConfiguration"></a>

```typescript
public readonly testConfiguration: IResolvable | NetworkConnectionMonitorTestConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration">NetworkConnectionMonitorTestConfiguration</a>[]

test_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#test_configuration NetworkConnectionMonitor#test_configuration}

---

##### `testGroup`<sup>Required</sup> <a name="testGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testGroup"></a>

```typescript
public readonly testGroup: IResolvable | NetworkConnectionMonitorTestGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup">NetworkConnectionMonitorTestGroup</a>[]

test_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#test_group NetworkConnectionMonitor#test_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#id NetworkConnectionMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#notes NetworkConnectionMonitor#notes}.

---

##### `outputWorkspaceResourceIds`<sup>Optional</sup> <a name="outputWorkspaceResourceIds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.outputWorkspaceResourceIds"></a>

```typescript
public readonly outputWorkspaceResourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#output_workspace_resource_ids NetworkConnectionMonitor#output_workspace_resource_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#tags NetworkConnectionMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectionMonitorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#timeouts NetworkConnectionMonitor#timeouts}

---

### NetworkConnectionMonitorEndpoint <a name="NetworkConnectionMonitorEndpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorEndpoint: networkConnectionMonitor.NetworkConnectionMonitorEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.coverageLevel">coverageLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#coverage_level NetworkConnectionMonitor#coverage_level}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.excludedIpAddresses">excludedIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#excluded_ip_addresses NetworkConnectionMonitor#excluded_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.includedIpAddresses">includedIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#included_ip_addresses NetworkConnectionMonitor#included_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#target_resource_id NetworkConnectionMonitor#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#target_resource_type NetworkConnectionMonitor#target_resource_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}.

---

##### `coverageLevel`<sup>Optional</sup> <a name="coverageLevel" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.coverageLevel"></a>

```typescript
public readonly coverageLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#coverage_level NetworkConnectionMonitor#coverage_level}.

---

##### `excludedIpAddresses`<sup>Optional</sup> <a name="excludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.excludedIpAddresses"></a>

```typescript
public readonly excludedIpAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#excluded_ip_addresses NetworkConnectionMonitor#excluded_ip_addresses}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.filter"></a>

```typescript
public readonly filter: NetworkConnectionMonitorEndpointFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#filter NetworkConnectionMonitor#filter}

---

##### `includedIpAddresses`<sup>Optional</sup> <a name="includedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.includedIpAddresses"></a>

```typescript
public readonly includedIpAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#included_ip_addresses NetworkConnectionMonitor#included_ip_addresses}.

---

##### `targetResourceId`<sup>Optional</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#target_resource_id NetworkConnectionMonitor#target_resource_id}.

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#target_resource_type NetworkConnectionMonitor#target_resource_type}.

---

### NetworkConnectionMonitorEndpointFilter <a name="NetworkConnectionMonitorEndpointFilter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorEndpointFilter: networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.item">item</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem">NetworkConnectionMonitorEndpointFilterItem</a>[]</code> | item block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}. |

---

##### `item`<sup>Optional</sup> <a name="item" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.item"></a>

```typescript
public readonly item: IResolvable | NetworkConnectionMonitorEndpointFilterItem[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem">NetworkConnectionMonitorEndpointFilterItem</a>[]

item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#item NetworkConnectionMonitor#item}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}.

---

### NetworkConnectionMonitorEndpointFilterItem <a name="NetworkConnectionMonitorEndpointFilterItem" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorEndpointFilterItem: networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}.

---

### NetworkConnectionMonitorTestConfiguration <a name="NetworkConnectionMonitorTestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorTestConfiguration: networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#protocol NetworkConnectionMonitor#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.httpConfiguration">httpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a></code> | http_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.icmpConfiguration">icmpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a></code> | icmp_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.preferredIpVersion">preferredIpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#preferred_ip_version NetworkConnectionMonitor#preferred_ip_version}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.successThreshold">successThreshold</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a></code> | success_threshold block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.tcpConfiguration">tcpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a></code> | tcp_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.testFrequencyInSeconds">testFrequencyInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#test_frequency_in_seconds NetworkConnectionMonitor#test_frequency_in_seconds}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#protocol NetworkConnectionMonitor#protocol}.

---

##### `httpConfiguration`<sup>Optional</sup> <a name="httpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.httpConfiguration"></a>

```typescript
public readonly httpConfiguration: NetworkConnectionMonitorTestConfigurationHttpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

http_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#http_configuration NetworkConnectionMonitor#http_configuration}

---

##### `icmpConfiguration`<sup>Optional</sup> <a name="icmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.icmpConfiguration"></a>

```typescript
public readonly icmpConfiguration: NetworkConnectionMonitorTestConfigurationIcmpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

icmp_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#icmp_configuration NetworkConnectionMonitor#icmp_configuration}

---

##### `preferredIpVersion`<sup>Optional</sup> <a name="preferredIpVersion" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.preferredIpVersion"></a>

```typescript
public readonly preferredIpVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#preferred_ip_version NetworkConnectionMonitor#preferred_ip_version}.

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.successThreshold"></a>

```typescript
public readonly successThreshold: NetworkConnectionMonitorTestConfigurationSuccessThreshold;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

success_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#success_threshold NetworkConnectionMonitor#success_threshold}

---

##### `tcpConfiguration`<sup>Optional</sup> <a name="tcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.tcpConfiguration"></a>

```typescript
public readonly tcpConfiguration: NetworkConnectionMonitorTestConfigurationTcpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

tcp_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#tcp_configuration NetworkConnectionMonitor#tcp_configuration}

---

##### `testFrequencyInSeconds`<sup>Optional</sup> <a name="testFrequencyInSeconds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.testFrequencyInSeconds"></a>

```typescript
public readonly testFrequencyInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#test_frequency_in_seconds NetworkConnectionMonitor#test_frequency_in_seconds}.

---

### NetworkConnectionMonitorTestConfigurationHttpConfiguration <a name="NetworkConnectionMonitorTestConfigurationHttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorTestConfigurationHttpConfiguration: networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#method NetworkConnectionMonitor#method}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#path NetworkConnectionMonitor#path}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.preferHttps">preferHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#prefer_https NetworkConnectionMonitor#prefer_https}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.requestHeader">requestHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader</a>[]</code> | request_header block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.validStatusCodeRanges">validStatusCodeRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#valid_status_code_ranges NetworkConnectionMonitor#valid_status_code_ranges}. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#method NetworkConnectionMonitor#method}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#path NetworkConnectionMonitor#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}.

---

##### `preferHttps`<sup>Optional</sup> <a name="preferHttps" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.preferHttps"></a>

```typescript
public readonly preferHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#prefer_https NetworkConnectionMonitor#prefer_https}.

---

##### `requestHeader`<sup>Optional</sup> <a name="requestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.requestHeader"></a>

```typescript
public readonly requestHeader: IResolvable | NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader</a>[]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#request_header NetworkConnectionMonitor#request_header}

---

##### `validStatusCodeRanges`<sup>Optional</sup> <a name="validStatusCodeRanges" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.validStatusCodeRanges"></a>

```typescript
public readonly validStatusCodeRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#valid_status_code_ranges NetworkConnectionMonitor#valid_status_code_ranges}.

---

### NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader: networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#value NetworkConnectionMonitor#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#value NetworkConnectionMonitor#value}.

---

### NetworkConnectionMonitorTestConfigurationIcmpConfiguration <a name="NetworkConnectionMonitorTestConfigurationIcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorTestConfigurationIcmpConfiguration: networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration.property.traceRouteEnabled">traceRouteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}. |

---

##### `traceRouteEnabled`<sup>Optional</sup> <a name="traceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration.property.traceRouteEnabled"></a>

```typescript
public readonly traceRouteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}.

---

### NetworkConnectionMonitorTestConfigurationSuccessThreshold <a name="NetworkConnectionMonitorTestConfigurationSuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorTestConfigurationSuccessThreshold: networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.checksFailedPercent">checksFailedPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#checks_failed_percent NetworkConnectionMonitor#checks_failed_percent}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.roundTripTimeMs">roundTripTimeMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#round_trip_time_ms NetworkConnectionMonitor#round_trip_time_ms}. |

---

##### `checksFailedPercent`<sup>Optional</sup> <a name="checksFailedPercent" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.checksFailedPercent"></a>

```typescript
public readonly checksFailedPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#checks_failed_percent NetworkConnectionMonitor#checks_failed_percent}.

---

##### `roundTripTimeMs`<sup>Optional</sup> <a name="roundTripTimeMs" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.roundTripTimeMs"></a>

```typescript
public readonly roundTripTimeMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#round_trip_time_ms NetworkConnectionMonitor#round_trip_time_ms}.

---

### NetworkConnectionMonitorTestConfigurationTcpConfiguration <a name="NetworkConnectionMonitorTestConfigurationTcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorTestConfigurationTcpConfiguration: networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.destinationPortBehavior">destinationPortBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#destination_port_behavior NetworkConnectionMonitor#destination_port_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.traceRouteEnabled">traceRouteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}.

---

##### `destinationPortBehavior`<sup>Optional</sup> <a name="destinationPortBehavior" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.destinationPortBehavior"></a>

```typescript
public readonly destinationPortBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#destination_port_behavior NetworkConnectionMonitor#destination_port_behavior}.

---

##### `traceRouteEnabled`<sup>Optional</sup> <a name="traceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.traceRouteEnabled"></a>

```typescript
public readonly traceRouteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}.

---

### NetworkConnectionMonitorTestGroup <a name="NetworkConnectionMonitorTestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorTestGroup: networkConnectionMonitor.NetworkConnectionMonitorTestGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.destinationEndpoints">destinationEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#destination_endpoints NetworkConnectionMonitor#destination_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.sourceEndpoints">sourceEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#source_endpoints NetworkConnectionMonitor#source_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.testConfigurationNames">testConfigurationNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#test_configuration_names NetworkConnectionMonitor#test_configuration_names}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#enabled NetworkConnectionMonitor#enabled}. |

---

##### `destinationEndpoints`<sup>Required</sup> <a name="destinationEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.destinationEndpoints"></a>

```typescript
public readonly destinationEndpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#destination_endpoints NetworkConnectionMonitor#destination_endpoints}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `sourceEndpoints`<sup>Required</sup> <a name="sourceEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.sourceEndpoints"></a>

```typescript
public readonly sourceEndpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#source_endpoints NetworkConnectionMonitor#source_endpoints}.

---

##### `testConfigurationNames`<sup>Required</sup> <a name="testConfigurationNames" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.testConfigurationNames"></a>

```typescript
public readonly testConfigurationNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#test_configuration_names NetworkConnectionMonitor#test_configuration_names}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#enabled NetworkConnectionMonitor#enabled}.

---

### NetworkConnectionMonitorTimeouts <a name="NetworkConnectionMonitorTimeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

const networkConnectionMonitorTimeouts: networkConnectionMonitor.NetworkConnectionMonitorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#create NetworkConnectionMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#delete NetworkConnectionMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#read NetworkConnectionMonitor#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#update NetworkConnectionMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#create NetworkConnectionMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#delete NetworkConnectionMonitor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#read NetworkConnectionMonitor#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_connection_monitor#update NetworkConnectionMonitor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectionMonitorEndpointFilterItemList <a name="NetworkConnectionMonitorEndpointFilterItemList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.get"></a>

```typescript
public get(index: number): NetworkConnectionMonitorEndpointFilterItemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem">NetworkConnectionMonitorEndpointFilterItem</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorEndpointFilterItem[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem">NetworkConnectionMonitorEndpointFilterItem</a>[]

---


### NetworkConnectionMonitorEndpointFilterItemOutputReference <a name="NetworkConnectionMonitorEndpointFilterItemOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem">NetworkConnectionMonitorEndpointFilterItem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorEndpointFilterItem;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem">NetworkConnectionMonitorEndpointFilterItem</a>

---


### NetworkConnectionMonitorEndpointFilterOutputReference <a name="NetworkConnectionMonitorEndpointFilterOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.putItem">putItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetItem">resetItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItem` <a name="putItem" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.putItem"></a>

```typescript
public putItem(value: IResolvable | NetworkConnectionMonitorEndpointFilterItem[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.putItem.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem">NetworkConnectionMonitorEndpointFilterItem</a>[]

---

##### `resetItem` <a name="resetItem" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetItem"></a>

```typescript
public resetItem(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.item">item</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList">NetworkConnectionMonitorEndpointFilterItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.itemInput">itemInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem">NetworkConnectionMonitorEndpointFilterItem</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `item`<sup>Required</sup> <a name="item" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.item"></a>

```typescript
public readonly item: NetworkConnectionMonitorEndpointFilterItemList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList">NetworkConnectionMonitorEndpointFilterItemList</a>

---

##### `itemInput`<sup>Optional</sup> <a name="itemInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.itemInput"></a>

```typescript
public readonly itemInput: IResolvable | NetworkConnectionMonitorEndpointFilterItem[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem">NetworkConnectionMonitorEndpointFilterItem</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectionMonitorEndpointFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

---


### NetworkConnectionMonitorEndpointList <a name="NetworkConnectionMonitorEndpointList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.get"></a>

```typescript
public get(index: number): NetworkConnectionMonitorEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint">NetworkConnectionMonitorEndpoint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorEndpoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint">NetworkConnectionMonitorEndpoint</a>[]

---


### NetworkConnectionMonitorEndpointOutputReference <a name="NetworkConnectionMonitorEndpointOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetCoverageLevel">resetCoverageLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetExcludedIpAddresses">resetExcludedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetIncludedIpAddresses">resetIncludedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceId">resetTargetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.putFilter"></a>

```typescript
public putFilter(value: NetworkConnectionMonitorEndpointFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetCoverageLevel` <a name="resetCoverageLevel" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetCoverageLevel"></a>

```typescript
public resetCoverageLevel(): void
```

##### `resetExcludedIpAddresses` <a name="resetExcludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetExcludedIpAddresses"></a>

```typescript
public resetExcludedIpAddresses(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetIncludedIpAddresses` <a name="resetIncludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetIncludedIpAddresses"></a>

```typescript
public resetIncludedIpAddresses(): void
```

##### `resetTargetResourceId` <a name="resetTargetResourceId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceId"></a>

```typescript
public resetTargetResourceId(): void
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceType"></a>

```typescript
public resetTargetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference">NetworkConnectionMonitorEndpointFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevelInput">coverageLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddressesInput">excludedIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddressesInput">includedIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevel">coverageLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddresses">excludedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddresses">includedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint">NetworkConnectionMonitorEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filter"></a>

```typescript
public readonly filter: NetworkConnectionMonitorEndpointFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference">NetworkConnectionMonitorEndpointFilterOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `coverageLevelInput`<sup>Optional</sup> <a name="coverageLevelInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevelInput"></a>

```typescript
public readonly coverageLevelInput: string;
```

- *Type:* string

---

##### `excludedIpAddressesInput`<sup>Optional</sup> <a name="excludedIpAddressesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddressesInput"></a>

```typescript
public readonly excludedIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: NetworkConnectionMonitorEndpointFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

---

##### `includedIpAddressesInput`<sup>Optional</sup> <a name="includedIpAddressesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddressesInput"></a>

```typescript
public readonly includedIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceTypeInput"></a>

```typescript
public readonly targetResourceTypeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `coverageLevel`<sup>Required</sup> <a name="coverageLevel" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevel"></a>

```typescript
public readonly coverageLevel: string;
```

- *Type:* string

---

##### `excludedIpAddresses`<sup>Required</sup> <a name="excludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddresses"></a>

```typescript
public readonly excludedIpAddresses: string[];
```

- *Type:* string[]

---

##### `includedIpAddresses`<sup>Required</sup> <a name="includedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddresses"></a>

```typescript
public readonly includedIpAddresses: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorEndpoint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint">NetworkConnectionMonitorEndpoint</a>

---


### NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.putRequestHeader">putRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPreferHttps">resetPreferHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetRequestHeader">resetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetValidStatusCodeRanges">resetValidStatusCodeRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeader` <a name="putRequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.putRequestHeader"></a>

```typescript
public putRequestHeader(value: IResolvable | NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader</a>[]

---

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreferHttps` <a name="resetPreferHttps" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPreferHttps"></a>

```typescript
public resetPreferHttps(): void
```

##### `resetRequestHeader` <a name="resetRequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetRequestHeader"></a>

```typescript
public resetRequestHeader(): void
```

##### `resetValidStatusCodeRanges` <a name="resetValidStatusCodeRanges" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetValidStatusCodeRanges"></a>

```typescript
public resetValidStatusCodeRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttpsInput">preferHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeaderInput">requestHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRangesInput">validStatusCodeRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttps">preferHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRanges">validStatusCodeRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeader"></a>

```typescript
public readonly requestHeader: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList</a>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preferHttpsInput`<sup>Optional</sup> <a name="preferHttpsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttpsInput"></a>

```typescript
public readonly preferHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requestHeaderInput`<sup>Optional</sup> <a name="requestHeaderInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeaderInput"></a>

```typescript
public readonly requestHeaderInput: IResolvable | NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader</a>[]

---

##### `validStatusCodeRangesInput`<sup>Optional</sup> <a name="validStatusCodeRangesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRangesInput"></a>

```typescript
public readonly validStatusCodeRangesInput: string[];
```

- *Type:* string[]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferHttps`<sup>Required</sup> <a name="preferHttps" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttps"></a>

```typescript
public readonly preferHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validStatusCodeRanges`<sup>Required</sup> <a name="validStatusCodeRanges" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRanges"></a>

```typescript
public readonly validStatusCodeRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectionMonitorTestConfigurationHttpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

---


### NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.get"></a>

```typescript
public get(index: number): NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader</a>[]

---


### NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader</a>

---


### NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resetTraceRouteEnabled">resetTraceRouteEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTraceRouteEnabled` <a name="resetTraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resetTraceRouteEnabled"></a>

```typescript
public resetTraceRouteEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabledInput">traceRouteEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabled">traceRouteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `traceRouteEnabledInput`<sup>Optional</sup> <a name="traceRouteEnabledInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabledInput"></a>

```typescript
public readonly traceRouteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `traceRouteEnabled`<sup>Required</sup> <a name="traceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabled"></a>

```typescript
public readonly traceRouteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectionMonitorTestConfigurationIcmpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

---


### NetworkConnectionMonitorTestConfigurationList <a name="NetworkConnectionMonitorTestConfigurationList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.get"></a>

```typescript
public get(index: number): NetworkConnectionMonitorTestConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration">NetworkConnectionMonitorTestConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorTestConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration">NetworkConnectionMonitorTestConfiguration</a>[]

---


### NetworkConnectionMonitorTestConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putHttpConfiguration">putHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putIcmpConfiguration">putIcmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putSuccessThreshold">putSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putTcpConfiguration">putTcpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetHttpConfiguration">resetHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetIcmpConfiguration">resetIcmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetPreferredIpVersion">resetPreferredIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTcpConfiguration">resetTcpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTestFrequencyInSeconds">resetTestFrequencyInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpConfiguration` <a name="putHttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putHttpConfiguration"></a>

```typescript
public putHttpConfiguration(value: NetworkConnectionMonitorTestConfigurationHttpConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putHttpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

---

##### `putIcmpConfiguration` <a name="putIcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putIcmpConfiguration"></a>

```typescript
public putIcmpConfiguration(value: NetworkConnectionMonitorTestConfigurationIcmpConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putIcmpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

---

##### `putSuccessThreshold` <a name="putSuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putSuccessThreshold"></a>

```typescript
public putSuccessThreshold(value: NetworkConnectionMonitorTestConfigurationSuccessThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putSuccessThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

---

##### `putTcpConfiguration` <a name="putTcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putTcpConfiguration"></a>

```typescript
public putTcpConfiguration(value: NetworkConnectionMonitorTestConfigurationTcpConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putTcpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

---

##### `resetHttpConfiguration` <a name="resetHttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetHttpConfiguration"></a>

```typescript
public resetHttpConfiguration(): void
```

##### `resetIcmpConfiguration` <a name="resetIcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetIcmpConfiguration"></a>

```typescript
public resetIcmpConfiguration(): void
```

##### `resetPreferredIpVersion` <a name="resetPreferredIpVersion" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetPreferredIpVersion"></a>

```typescript
public resetPreferredIpVersion(): void
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetSuccessThreshold"></a>

```typescript
public resetSuccessThreshold(): void
```

##### `resetTcpConfiguration` <a name="resetTcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTcpConfiguration"></a>

```typescript
public resetTcpConfiguration(): void
```

##### `resetTestFrequencyInSeconds` <a name="resetTestFrequencyInSeconds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTestFrequencyInSeconds"></a>

```typescript
public resetTestFrequencyInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfiguration">httpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfiguration">icmpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThreshold">successThreshold</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference">NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfiguration">tcpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfigurationInput">httpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfigurationInput">icmpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersionInput">preferredIpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfigurationInput">tcpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSecondsInput">testFrequencyInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersion">preferredIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSeconds">testFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration">NetworkConnectionMonitorTestConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpConfiguration`<sup>Required</sup> <a name="httpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfiguration"></a>

```typescript
public readonly httpConfiguration: NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference</a>

---

##### `icmpConfiguration`<sup>Required</sup> <a name="icmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfiguration"></a>

```typescript
public readonly icmpConfiguration: NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference</a>

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThreshold"></a>

```typescript
public readonly successThreshold: NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference">NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference</a>

---

##### `tcpConfiguration`<sup>Required</sup> <a name="tcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfiguration"></a>

```typescript
public readonly tcpConfiguration: NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference</a>

---

##### `httpConfigurationInput`<sup>Optional</sup> <a name="httpConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfigurationInput"></a>

```typescript
public readonly httpConfigurationInput: NetworkConnectionMonitorTestConfigurationHttpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

---

##### `icmpConfigurationInput`<sup>Optional</sup> <a name="icmpConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfigurationInput"></a>

```typescript
public readonly icmpConfigurationInput: NetworkConnectionMonitorTestConfigurationIcmpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `preferredIpVersionInput`<sup>Optional</sup> <a name="preferredIpVersionInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersionInput"></a>

```typescript
public readonly preferredIpVersionInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThresholdInput"></a>

```typescript
public readonly successThresholdInput: NetworkConnectionMonitorTestConfigurationSuccessThreshold;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

---

##### `tcpConfigurationInput`<sup>Optional</sup> <a name="tcpConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfigurationInput"></a>

```typescript
public readonly tcpConfigurationInput: NetworkConnectionMonitorTestConfigurationTcpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

---

##### `testFrequencyInSecondsInput`<sup>Optional</sup> <a name="testFrequencyInSecondsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSecondsInput"></a>

```typescript
public readonly testFrequencyInSecondsInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preferredIpVersion`<sup>Required</sup> <a name="preferredIpVersion" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersion"></a>

```typescript
public readonly preferredIpVersion: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `testFrequencyInSeconds`<sup>Required</sup> <a name="testFrequencyInSeconds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSeconds"></a>

```typescript
public readonly testFrequencyInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorTestConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration">NetworkConnectionMonitorTestConfiguration</a>

---


### NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference <a name="NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetChecksFailedPercent">resetChecksFailedPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetRoundTripTimeMs">resetRoundTripTimeMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChecksFailedPercent` <a name="resetChecksFailedPercent" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetChecksFailedPercent"></a>

```typescript
public resetChecksFailedPercent(): void
```

##### `resetRoundTripTimeMs` <a name="resetRoundTripTimeMs" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetRoundTripTimeMs"></a>

```typescript
public resetRoundTripTimeMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercentInput">checksFailedPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMsInput">roundTripTimeMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercent">checksFailedPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMs">roundTripTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checksFailedPercentInput`<sup>Optional</sup> <a name="checksFailedPercentInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercentInput"></a>

```typescript
public readonly checksFailedPercentInput: number;
```

- *Type:* number

---

##### `roundTripTimeMsInput`<sup>Optional</sup> <a name="roundTripTimeMsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMsInput"></a>

```typescript
public readonly roundTripTimeMsInput: number;
```

- *Type:* number

---

##### `checksFailedPercent`<sup>Required</sup> <a name="checksFailedPercent" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercent"></a>

```typescript
public readonly checksFailedPercent: number;
```

- *Type:* number

---

##### `roundTripTimeMs`<sup>Required</sup> <a name="roundTripTimeMs" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMs"></a>

```typescript
public readonly roundTripTimeMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectionMonitorTestConfigurationSuccessThreshold;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

---


### NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetDestinationPortBehavior">resetDestinationPortBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetTraceRouteEnabled">resetTraceRouteEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPortBehavior` <a name="resetDestinationPortBehavior" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetDestinationPortBehavior"></a>

```typescript
public resetDestinationPortBehavior(): void
```

##### `resetTraceRouteEnabled` <a name="resetTraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetTraceRouteEnabled"></a>

```typescript
public resetTraceRouteEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehaviorInput">destinationPortBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabledInput">traceRouteEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehavior">destinationPortBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabled">traceRouteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortBehaviorInput`<sup>Optional</sup> <a name="destinationPortBehaviorInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehaviorInput"></a>

```typescript
public readonly destinationPortBehaviorInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `traceRouteEnabledInput`<sup>Optional</sup> <a name="traceRouteEnabledInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabledInput"></a>

```typescript
public readonly traceRouteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `destinationPortBehavior`<sup>Required</sup> <a name="destinationPortBehavior" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehavior"></a>

```typescript
public readonly destinationPortBehavior: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `traceRouteEnabled`<sup>Required</sup> <a name="traceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabled"></a>

```typescript
public readonly traceRouteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectionMonitorTestConfigurationTcpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

---


### NetworkConnectionMonitorTestGroupList <a name="NetworkConnectionMonitorTestGroupList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.get"></a>

```typescript
public get(index: number): NetworkConnectionMonitorTestGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup">NetworkConnectionMonitorTestGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorTestGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup">NetworkConnectionMonitorTestGroup</a>[]

---


### NetworkConnectionMonitorTestGroupOutputReference <a name="NetworkConnectionMonitorTestGroupOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpointsInput">destinationEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpointsInput">sourceEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNamesInput">testConfigurationNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpoints">destinationEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpoints">sourceEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNames">testConfigurationNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup">NetworkConnectionMonitorTestGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationEndpointsInput`<sup>Optional</sup> <a name="destinationEndpointsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpointsInput"></a>

```typescript
public readonly destinationEndpointsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceEndpointsInput`<sup>Optional</sup> <a name="sourceEndpointsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpointsInput"></a>

```typescript
public readonly sourceEndpointsInput: string[];
```

- *Type:* string[]

---

##### `testConfigurationNamesInput`<sup>Optional</sup> <a name="testConfigurationNamesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNamesInput"></a>

```typescript
public readonly testConfigurationNamesInput: string[];
```

- *Type:* string[]

---

##### `destinationEndpoints`<sup>Required</sup> <a name="destinationEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpoints"></a>

```typescript
public readonly destinationEndpoints: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceEndpoints`<sup>Required</sup> <a name="sourceEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpoints"></a>

```typescript
public readonly sourceEndpoints: string[];
```

- *Type:* string[]

---

##### `testConfigurationNames`<sup>Required</sup> <a name="testConfigurationNames" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNames"></a>

```typescript
public readonly testConfigurationNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorTestGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup">NetworkConnectionMonitorTestGroup</a>

---


### NetworkConnectionMonitorTimeoutsOutputReference <a name="NetworkConnectionMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkConnectionMonitor } from '@cdktf/provider-azurerm'

new networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectionMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a>

---




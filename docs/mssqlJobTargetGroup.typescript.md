# `mssqlJobTargetGroup` Submodule <a name="`mssqlJobTargetGroup` Submodule" id="@cdktf/provider-azurerm.mssqlJobTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlJobTargetGroup <a name="MssqlJobTargetGroup" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group azurerm_mssql_job_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.Initializer"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

new mssqlJobTargetGroup.MssqlJobTargetGroup(scope: Construct, id: string, config: MssqlJobTargetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig">MssqlJobTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig">MssqlJobTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.putJobTarget">putJobTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.resetJobTarget">resetJobTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putJobTarget` <a name="putJobTarget" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.putJobTarget"></a>

```typescript
public putJobTarget(value: IResolvable | MssqlJobTargetGroupJobTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.putJobTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget">MssqlJobTargetGroupJobTarget</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlJobTargetGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts">MssqlJobTargetGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJobTarget` <a name="resetJobTarget" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.resetJobTarget"></a>

```typescript
public resetJobTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlJobTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.isConstruct"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

mssqlJobTargetGroup.MssqlJobTargetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.isTerraformElement"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

mssqlJobTargetGroup.MssqlJobTargetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.isTerraformResource"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

mssqlJobTargetGroup.MssqlJobTargetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.generateConfigForImport"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

mssqlJobTargetGroup.MssqlJobTargetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlJobTargetGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlJobTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlJobTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlJobTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.jobTarget">jobTarget</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList">MssqlJobTargetGroupJobTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference">MssqlJobTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.jobAgentIdInput">jobAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.jobTargetInput">jobTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget">MssqlJobTargetGroupJobTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts">MssqlJobTargetGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.jobAgentId">jobAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobTarget`<sup>Required</sup> <a name="jobTarget" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.jobTarget"></a>

```typescript
public readonly jobTarget: MssqlJobTargetGroupJobTargetList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList">MssqlJobTargetGroupJobTargetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlJobTargetGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference">MssqlJobTargetGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobAgentIdInput`<sup>Optional</sup> <a name="jobAgentIdInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.jobAgentIdInput"></a>

```typescript
public readonly jobAgentIdInput: string;
```

- *Type:* string

---

##### `jobTargetInput`<sup>Optional</sup> <a name="jobTargetInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.jobTargetInput"></a>

```typescript
public readonly jobTargetInput: IResolvable | MssqlJobTargetGroupJobTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget">MssqlJobTargetGroupJobTarget</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlJobTargetGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts">MssqlJobTargetGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobAgentId`<sup>Required</sup> <a name="jobAgentId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.jobAgentId"></a>

```typescript
public readonly jobAgentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlJobTargetGroupConfig <a name="MssqlJobTargetGroupConfig" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.Initializer"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

const mssqlJobTargetGroupConfig: mssqlJobTargetGroup.MssqlJobTargetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.jobAgentId">jobAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#job_agent_id MssqlJobTargetGroup#job_agent_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#name MssqlJobTargetGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#id MssqlJobTargetGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.jobTarget">jobTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget">MssqlJobTargetGroupJobTarget</a>[]</code> | job_target block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts">MssqlJobTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobAgentId`<sup>Required</sup> <a name="jobAgentId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.jobAgentId"></a>

```typescript
public readonly jobAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#job_agent_id MssqlJobTargetGroup#job_agent_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#name MssqlJobTargetGroup#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#id MssqlJobTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobTarget`<sup>Optional</sup> <a name="jobTarget" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.jobTarget"></a>

```typescript
public readonly jobTarget: IResolvable | MssqlJobTargetGroupJobTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget">MssqlJobTargetGroupJobTarget</a>[]

job_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#job_target MssqlJobTargetGroup#job_target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlJobTargetGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts">MssqlJobTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#timeouts MssqlJobTargetGroup#timeouts}

---

### MssqlJobTargetGroupJobTarget <a name="MssqlJobTargetGroupJobTarget" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.Initializer"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

const mssqlJobTargetGroupJobTarget: mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#server_name MssqlJobTargetGroup#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#database_name MssqlJobTargetGroup#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.elasticPoolName">elasticPoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#elastic_pool_name MssqlJobTargetGroup#elastic_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.jobCredentialId">jobCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#job_credential_id MssqlJobTargetGroup#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.membershipType">membershipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#membership_type MssqlJobTargetGroup#membership_type}. |

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#server_name MssqlJobTargetGroup#server_name}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#database_name MssqlJobTargetGroup#database_name}.

---

##### `elasticPoolName`<sup>Optional</sup> <a name="elasticPoolName" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.elasticPoolName"></a>

```typescript
public readonly elasticPoolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#elastic_pool_name MssqlJobTargetGroup#elastic_pool_name}.

---

##### `jobCredentialId`<sup>Optional</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.jobCredentialId"></a>

```typescript
public readonly jobCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#job_credential_id MssqlJobTargetGroup#job_credential_id}.

---

##### `membershipType`<sup>Optional</sup> <a name="membershipType" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget.property.membershipType"></a>

```typescript
public readonly membershipType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#membership_type MssqlJobTargetGroup#membership_type}.

---

### MssqlJobTargetGroupTimeouts <a name="MssqlJobTargetGroupTimeouts" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts.Initializer"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

const mssqlJobTargetGroupTimeouts: mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#create MssqlJobTargetGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#delete MssqlJobTargetGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#read MssqlJobTargetGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#update MssqlJobTargetGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#create MssqlJobTargetGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#delete MssqlJobTargetGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#read MssqlJobTargetGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/mssql_job_target_group#update MssqlJobTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlJobTargetGroupJobTargetList <a name="MssqlJobTargetGroupJobTargetList" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.Initializer"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

new mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.get"></a>

```typescript
public get(index: number): MssqlJobTargetGroupJobTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget">MssqlJobTargetGroupJobTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlJobTargetGroupJobTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget">MssqlJobTargetGroupJobTarget</a>[]

---


### MssqlJobTargetGroupJobTargetOutputReference <a name="MssqlJobTargetGroupJobTargetOutputReference" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.Initializer"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

new mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resetElasticPoolName">resetElasticPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resetJobCredentialId">resetJobCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resetMembershipType">resetMembershipType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetElasticPoolName` <a name="resetElasticPoolName" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resetElasticPoolName"></a>

```typescript
public resetElasticPoolName(): void
```

##### `resetJobCredentialId` <a name="resetJobCredentialId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resetJobCredentialId"></a>

```typescript
public resetJobCredentialId(): void
```

##### `resetMembershipType` <a name="resetMembershipType" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.resetMembershipType"></a>

```typescript
public resetMembershipType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.elasticPoolNameInput">elasticPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.jobCredentialIdInput">jobCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.membershipTypeInput">membershipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.elasticPoolName">elasticPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.jobCredentialId">jobCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.membershipType">membershipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget">MssqlJobTargetGroupJobTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `elasticPoolNameInput`<sup>Optional</sup> <a name="elasticPoolNameInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.elasticPoolNameInput"></a>

```typescript
public readonly elasticPoolNameInput: string;
```

- *Type:* string

---

##### `jobCredentialIdInput`<sup>Optional</sup> <a name="jobCredentialIdInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.jobCredentialIdInput"></a>

```typescript
public readonly jobCredentialIdInput: string;
```

- *Type:* string

---

##### `membershipTypeInput`<sup>Optional</sup> <a name="membershipTypeInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.membershipTypeInput"></a>

```typescript
public readonly membershipTypeInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `elasticPoolName`<sup>Required</sup> <a name="elasticPoolName" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.elasticPoolName"></a>

```typescript
public readonly elasticPoolName: string;
```

- *Type:* string

---

##### `jobCredentialId`<sup>Required</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.jobCredentialId"></a>

```typescript
public readonly jobCredentialId: string;
```

- *Type:* string

---

##### `membershipType`<sup>Required</sup> <a name="membershipType" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.membershipType"></a>

```typescript
public readonly membershipType: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlJobTargetGroupJobTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupJobTarget">MssqlJobTargetGroupJobTarget</a>

---


### MssqlJobTargetGroupTimeoutsOutputReference <a name="MssqlJobTargetGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlJobTargetGroup } from '@cdktf/provider-azurerm'

new mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts">MssqlJobTargetGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlJobTargetGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlJobTargetGroup.MssqlJobTargetGroupTimeouts">MssqlJobTargetGroupTimeouts</a>

---




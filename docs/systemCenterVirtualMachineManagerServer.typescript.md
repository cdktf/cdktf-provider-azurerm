# `systemCenterVirtualMachineManagerServer` Submodule <a name="`systemCenterVirtualMachineManagerServer` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerServer <a name="SystemCenterVirtualMachineManagerServer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server azurerm_system_center_virtual_machine_manager_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerServer } from '@cdktf/provider-azurerm'

new systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer(scope: Construct, id: string, config: SystemCenterVirtualMachineManagerServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig">SystemCenterVirtualMachineManagerServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig">SystemCenterVirtualMachineManagerServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.putTimeouts"></a>

```typescript
public putTimeouts(value: SystemCenterVirtualMachineManagerServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct"></a>

```typescript
import { systemCenterVirtualMachineManagerServer } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement"></a>

```typescript
import { systemCenterVirtualMachineManagerServer } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource"></a>

```typescript
import { systemCenterVirtualMachineManagerServer } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport"></a>

```typescript
import { systemCenterVirtualMachineManagerServer } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SystemCenterVirtualMachineManagerServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SystemCenterVirtualMachineManagerServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference">SystemCenterVirtualMachineManagerServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationIdInput">customLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationId">customLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeouts"></a>

```typescript
public readonly timeouts: SystemCenterVirtualMachineManagerServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference">SystemCenterVirtualMachineManagerServerTimeoutsOutputReference</a>

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationIdInput"></a>

```typescript
public readonly customLocationIdInput: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SystemCenterVirtualMachineManagerServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.customLocationId"></a>

```typescript
public readonly customLocationId: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerServerConfig <a name="SystemCenterVirtualMachineManagerServerConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerServer } from '@cdktf/provider-azurerm'

const systemCenterVirtualMachineManagerServerConfig: systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.customLocationId">customLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#custom_location_id SystemCenterVirtualMachineManagerServer#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.fqdn">fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#fqdn SystemCenterVirtualMachineManagerServer#fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#location SystemCenterVirtualMachineManagerServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#name SystemCenterVirtualMachineManagerServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#password SystemCenterVirtualMachineManagerServer#password}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#resource_group_name SystemCenterVirtualMachineManagerServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#username SystemCenterVirtualMachineManagerServer#username}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#id SystemCenterVirtualMachineManagerServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#port SystemCenterVirtualMachineManagerServer#port}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#tags SystemCenterVirtualMachineManagerServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.customLocationId"></a>

```typescript
public readonly customLocationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#custom_location_id SystemCenterVirtualMachineManagerServer#custom_location_id}.

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#fqdn SystemCenterVirtualMachineManagerServer#fqdn}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#location SystemCenterVirtualMachineManagerServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#name SystemCenterVirtualMachineManagerServer#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#password SystemCenterVirtualMachineManagerServer#password}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#resource_group_name SystemCenterVirtualMachineManagerServer#resource_group_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#username SystemCenterVirtualMachineManagerServer#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#id SystemCenterVirtualMachineManagerServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#port SystemCenterVirtualMachineManagerServer#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#tags SystemCenterVirtualMachineManagerServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SystemCenterVirtualMachineManagerServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#timeouts SystemCenterVirtualMachineManagerServer#timeouts}

---

### SystemCenterVirtualMachineManagerServerTimeouts <a name="SystemCenterVirtualMachineManagerServerTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerServer } from '@cdktf/provider-azurerm'

const systemCenterVirtualMachineManagerServerTimeouts: systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#create SystemCenterVirtualMachineManagerServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#delete SystemCenterVirtualMachineManagerServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#read SystemCenterVirtualMachineManagerServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#update SystemCenterVirtualMachineManagerServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#create SystemCenterVirtualMachineManagerServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#delete SystemCenterVirtualMachineManagerServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#read SystemCenterVirtualMachineManagerServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/system_center_virtual_machine_manager_server#update SystemCenterVirtualMachineManagerServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerServerTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerServer } from '@cdktf/provider-azurerm'

new systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SystemCenterVirtualMachineManagerServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerServer.SystemCenterVirtualMachineManagerServerTimeouts">SystemCenterVirtualMachineManagerServerTimeouts</a>

---




# `dedicatedHostGroup` Submodule <a name="`dedicatedHostGroup` Submodule" id="@cdktf/provider-azurerm.dedicatedHostGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DedicatedHostGroup <a name="DedicatedHostGroup" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group azurerm_dedicated_host_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.Initializer"></a>

```typescript
import { dedicatedHostGroup } from '@cdktf/provider-azurerm'

new dedicatedHostGroup.DedicatedHostGroup(scope: Construct, id: string, config: DedicatedHostGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig">DedicatedHostGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig">DedicatedHostGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetAutomaticPlacementEnabled">resetAutomaticPlacementEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DedicatedHostGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts">DedicatedHostGroupTimeouts</a>

---

##### `resetAutomaticPlacementEnabled` <a name="resetAutomaticPlacementEnabled" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetAutomaticPlacementEnabled"></a>

```typescript
public resetAutomaticPlacementEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DedicatedHostGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.isConstruct"></a>

```typescript
import { dedicatedHostGroup } from '@cdktf/provider-azurerm'

dedicatedHostGroup.DedicatedHostGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.isTerraformElement"></a>

```typescript
import { dedicatedHostGroup } from '@cdktf/provider-azurerm'

dedicatedHostGroup.DedicatedHostGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.isTerraformResource"></a>

```typescript
import { dedicatedHostGroup } from '@cdktf/provider-azurerm'

dedicatedHostGroup.DedicatedHostGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.generateConfigForImport"></a>

```typescript
import { dedicatedHostGroup } from '@cdktf/provider-azurerm'

dedicatedHostGroup.DedicatedHostGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DedicatedHostGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DedicatedHostGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DedicatedHostGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DedicatedHostGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference">DedicatedHostGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.automaticPlacementEnabledInput">automaticPlacementEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.platformFaultDomainCountInput">platformFaultDomainCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts">DedicatedHostGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.automaticPlacementEnabled">automaticPlacementEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.platformFaultDomainCount">platformFaultDomainCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DedicatedHostGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference">DedicatedHostGroupTimeoutsOutputReference</a>

---

##### `automaticPlacementEnabledInput`<sup>Optional</sup> <a name="automaticPlacementEnabledInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.automaticPlacementEnabledInput"></a>

```typescript
public readonly automaticPlacementEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformFaultDomainCountInput`<sup>Optional</sup> <a name="platformFaultDomainCountInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.platformFaultDomainCountInput"></a>

```typescript
public readonly platformFaultDomainCountInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DedicatedHostGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts">DedicatedHostGroupTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `automaticPlacementEnabled`<sup>Required</sup> <a name="automaticPlacementEnabled" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.automaticPlacementEnabled"></a>

```typescript
public readonly automaticPlacementEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platformFaultDomainCount`<sup>Required</sup> <a name="platformFaultDomainCount" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.platformFaultDomainCount"></a>

```typescript
public readonly platformFaultDomainCount: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DedicatedHostGroupConfig <a name="DedicatedHostGroupConfig" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.Initializer"></a>

```typescript
import { dedicatedHostGroup } from '@cdktf/provider-azurerm'

const dedicatedHostGroupConfig: dedicatedHostGroup.DedicatedHostGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#location DedicatedHostGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#name DedicatedHostGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.platformFaultDomainCount">platformFaultDomainCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#platform_fault_domain_count DedicatedHostGroup#platform_fault_domain_count}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#resource_group_name DedicatedHostGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.automaticPlacementEnabled">automaticPlacementEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#automatic_placement_enabled DedicatedHostGroup#automatic_placement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#id DedicatedHostGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#tags DedicatedHostGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts">DedicatedHostGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#zone DedicatedHostGroup#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#location DedicatedHostGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#name DedicatedHostGroup#name}.

---

##### `platformFaultDomainCount`<sup>Required</sup> <a name="platformFaultDomainCount" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.platformFaultDomainCount"></a>

```typescript
public readonly platformFaultDomainCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#platform_fault_domain_count DedicatedHostGroup#platform_fault_domain_count}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#resource_group_name DedicatedHostGroup#resource_group_name}.

---

##### `automaticPlacementEnabled`<sup>Optional</sup> <a name="automaticPlacementEnabled" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.automaticPlacementEnabled"></a>

```typescript
public readonly automaticPlacementEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#automatic_placement_enabled DedicatedHostGroup#automatic_placement_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#id DedicatedHostGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#tags DedicatedHostGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DedicatedHostGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts">DedicatedHostGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#timeouts DedicatedHostGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#zone DedicatedHostGroup#zone}.

---

### DedicatedHostGroupTimeouts <a name="DedicatedHostGroupTimeouts" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts.Initializer"></a>

```typescript
import { dedicatedHostGroup } from '@cdktf/provider-azurerm'

const dedicatedHostGroupTimeouts: dedicatedHostGroup.DedicatedHostGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#create DedicatedHostGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#delete DedicatedHostGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#read DedicatedHostGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#update DedicatedHostGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#create DedicatedHostGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#delete DedicatedHostGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#read DedicatedHostGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dedicated_host_group#update DedicatedHostGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DedicatedHostGroupTimeoutsOutputReference <a name="DedicatedHostGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dedicatedHostGroup } from '@cdktf/provider-azurerm'

new dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts">DedicatedHostGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DedicatedHostGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dedicatedHostGroup.DedicatedHostGroupTimeouts">DedicatedHostGroupTimeouts</a>

---




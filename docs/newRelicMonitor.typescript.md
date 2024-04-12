# `newRelicMonitor` Submodule <a name="`newRelicMonitor` Submodule" id="@cdktf/provider-azurerm.newRelicMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewRelicMonitor <a name="NewRelicMonitor" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor azurerm_new_relic_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

new newRelicMonitor.NewRelicMonitor(scope: Construct, id: string, config: NewRelicMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig">NewRelicMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig">NewRelicMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountCreationSource">resetAccountCreationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetIngestionKey">resetIngestionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrgCreationSource">resetOrgCreationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan"></a>

```typescript
public putPlan(value: NewRelicMonitorPlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts"></a>

```typescript
public putTimeouts(value: NewRelicMonitorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

---

##### `putUser` <a name="putUser" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser"></a>

```typescript
public putUser(value: NewRelicMonitorUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

---

##### `resetAccountCreationSource` <a name="resetAccountCreationSource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountCreationSource"></a>

```typescript
public resetAccountCreationSource(): void
```

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngestionKey` <a name="resetIngestionKey" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetIngestionKey"></a>

```typescript
public resetIngestionKey(): void
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrganizationId"></a>

```typescript
public resetOrganizationId(): void
```

##### `resetOrgCreationSource` <a name="resetOrgCreationSource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrgCreationSource"></a>

```typescript
public resetOrgCreationSource(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetUserId"></a>

```typescript
public resetUserId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NewRelicMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isConstruct"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

newRelicMonitor.NewRelicMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformElement"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

newRelicMonitor.NewRelicMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformResource"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

newRelicMonitor.NewRelicMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

newRelicMonitor.NewRelicMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NewRelicMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NewRelicMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NewRelicMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NewRelicMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference">NewRelicMonitorPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference">NewRelicMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference">NewRelicMonitorUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSourceInput">accountCreationSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKeyInput">ingestionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSourceInput">orgCreationSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSource">accountCreationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKey">ingestionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSource">orgCreationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.plan"></a>

```typescript
public readonly plan: NewRelicMonitorPlanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference">NewRelicMonitorPlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeouts"></a>

```typescript
public readonly timeouts: NewRelicMonitorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference">NewRelicMonitorTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.user"></a>

```typescript
public readonly user: NewRelicMonitorUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference">NewRelicMonitorUserOutputReference</a>

---

##### `accountCreationSourceInput`<sup>Optional</sup> <a name="accountCreationSourceInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSourceInput"></a>

```typescript
public readonly accountCreationSourceInput: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingestionKeyInput`<sup>Optional</sup> <a name="ingestionKeyInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKeyInput"></a>

```typescript
public readonly ingestionKeyInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `orgCreationSourceInput`<sup>Optional</sup> <a name="orgCreationSourceInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSourceInput"></a>

```typescript
public readonly orgCreationSourceInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.planInput"></a>

```typescript
public readonly planInput: NewRelicMonitorPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NewRelicMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userInput"></a>

```typescript
public readonly userInput: NewRelicMonitorUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

---

##### `accountCreationSource`<sup>Required</sup> <a name="accountCreationSource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSource"></a>

```typescript
public readonly accountCreationSource: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestionKey`<sup>Required</sup> <a name="ingestionKey" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKey"></a>

```typescript
public readonly ingestionKey: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `orgCreationSource`<sup>Required</sup> <a name="orgCreationSource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSource"></a>

```typescript
public readonly orgCreationSource: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NewRelicMonitorConfig <a name="NewRelicMonitorConfig" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.Initializer"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

const newRelicMonitorConfig: newRelicMonitor.NewRelicMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#location NewRelicMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#name NewRelicMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#resource_group_name NewRelicMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountCreationSource">accountCreationSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#account_creation_source NewRelicMonitor#account_creation_source}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#account_id NewRelicMonitor#account_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#id NewRelicMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.ingestionKey">ingestionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#ingestion_key NewRelicMonitor#ingestion_key}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.organizationId">organizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#organization_id NewRelicMonitor#organization_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.orgCreationSource">orgCreationSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#org_creation_source NewRelicMonitor#org_creation_source}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#user_id NewRelicMonitor#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#location NewRelicMonitor#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#name NewRelicMonitor#name}.

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.plan"></a>

```typescript
public readonly plan: NewRelicMonitorPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#plan NewRelicMonitor#plan}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#resource_group_name NewRelicMonitor#resource_group_name}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.user"></a>

```typescript
public readonly user: NewRelicMonitorUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#user NewRelicMonitor#user}

---

##### `accountCreationSource`<sup>Optional</sup> <a name="accountCreationSource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountCreationSource"></a>

```typescript
public readonly accountCreationSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#account_creation_source NewRelicMonitor#account_creation_source}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#account_id NewRelicMonitor#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#id NewRelicMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestionKey`<sup>Optional</sup> <a name="ingestionKey" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.ingestionKey"></a>

```typescript
public readonly ingestionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#ingestion_key NewRelicMonitor#ingestion_key}.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#organization_id NewRelicMonitor#organization_id}.

---

##### `orgCreationSource`<sup>Optional</sup> <a name="orgCreationSource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.orgCreationSource"></a>

```typescript
public readonly orgCreationSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#org_creation_source NewRelicMonitor#org_creation_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NewRelicMonitorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#timeouts NewRelicMonitor#timeouts}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#user_id NewRelicMonitor#user_id}.

---

### NewRelicMonitorPlan <a name="NewRelicMonitorPlan" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.Initializer"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

const newRelicMonitorPlan: newRelicMonitor.NewRelicMonitorPlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.effectiveDate">effectiveDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#effective_date NewRelicMonitor#effective_date}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.billingCycle">billingCycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#billing_cycle NewRelicMonitor#billing_cycle}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.planId">planId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#plan_id NewRelicMonitor#plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.usageType">usageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#usage_type NewRelicMonitor#usage_type}. |

---

##### `effectiveDate`<sup>Required</sup> <a name="effectiveDate" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.effectiveDate"></a>

```typescript
public readonly effectiveDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#effective_date NewRelicMonitor#effective_date}.

---

##### `billingCycle`<sup>Optional</sup> <a name="billingCycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.billingCycle"></a>

```typescript
public readonly billingCycle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#billing_cycle NewRelicMonitor#billing_cycle}.

---

##### `planId`<sup>Optional</sup> <a name="planId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.planId"></a>

```typescript
public readonly planId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#plan_id NewRelicMonitor#plan_id}.

---

##### `usageType`<sup>Optional</sup> <a name="usageType" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#usage_type NewRelicMonitor#usage_type}.

---

### NewRelicMonitorTimeouts <a name="NewRelicMonitorTimeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.Initializer"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

const newRelicMonitorTimeouts: newRelicMonitor.NewRelicMonitorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#create NewRelicMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#delete NewRelicMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#read NewRelicMonitor#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#create NewRelicMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#delete NewRelicMonitor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#read NewRelicMonitor#read}.

---

### NewRelicMonitorUser <a name="NewRelicMonitorUser" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.Initializer"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

const newRelicMonitorUser: newRelicMonitor.NewRelicMonitorUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#email NewRelicMonitor#email}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#first_name NewRelicMonitor#first_name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#last_name NewRelicMonitor#last_name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#phone_number NewRelicMonitor#phone_number}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#email NewRelicMonitor#email}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#first_name NewRelicMonitor#first_name}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#last_name NewRelicMonitor#last_name}.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_monitor#phone_number NewRelicMonitor#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### NewRelicMonitorPlanOutputReference <a name="NewRelicMonitorPlanOutputReference" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

new newRelicMonitor.NewRelicMonitorPlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetBillingCycle">resetBillingCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetPlanId">resetPlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetUsageType">resetUsageType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBillingCycle` <a name="resetBillingCycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetBillingCycle"></a>

```typescript
public resetBillingCycle(): void
```

##### `resetPlanId` <a name="resetPlanId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetPlanId"></a>

```typescript
public resetPlanId(): void
```

##### `resetUsageType` <a name="resetUsageType" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetUsageType"></a>

```typescript
public resetUsageType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycleInput">billingCycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDateInput">effectiveDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planIdInput">planIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageTypeInput">usageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycle">billingCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDate">effectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planId">planId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageType">usageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCycleInput`<sup>Optional</sup> <a name="billingCycleInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycleInput"></a>

```typescript
public readonly billingCycleInput: string;
```

- *Type:* string

---

##### `effectiveDateInput`<sup>Optional</sup> <a name="effectiveDateInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDateInput"></a>

```typescript
public readonly effectiveDateInput: string;
```

- *Type:* string

---

##### `planIdInput`<sup>Optional</sup> <a name="planIdInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planIdInput"></a>

```typescript
public readonly planIdInput: string;
```

- *Type:* string

---

##### `usageTypeInput`<sup>Optional</sup> <a name="usageTypeInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageTypeInput"></a>

```typescript
public readonly usageTypeInput: string;
```

- *Type:* string

---

##### `billingCycle`<sup>Required</sup> <a name="billingCycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycle"></a>

```typescript
public readonly billingCycle: string;
```

- *Type:* string

---

##### `effectiveDate`<sup>Required</sup> <a name="effectiveDate" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDate"></a>

```typescript
public readonly effectiveDate: string;
```

- *Type:* string

---

##### `planId`<sup>Required</sup> <a name="planId" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planId"></a>

```typescript
public readonly planId: string;
```

- *Type:* string

---

##### `usageType`<sup>Required</sup> <a name="usageType" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NewRelicMonitorPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

---


### NewRelicMonitorTimeoutsOutputReference <a name="NewRelicMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

new newRelicMonitor.NewRelicMonitorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NewRelicMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

---


### NewRelicMonitorUserOutputReference <a name="NewRelicMonitorUserOutputReference" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer"></a>

```typescript
import { newRelicMonitor } from '@cdktf/provider-azurerm'

new newRelicMonitor.NewRelicMonitorUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NewRelicMonitorUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

---




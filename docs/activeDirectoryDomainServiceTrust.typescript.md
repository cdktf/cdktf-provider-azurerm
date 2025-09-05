# `activeDirectoryDomainServiceTrust` Submodule <a name="`activeDirectoryDomainServiceTrust` Submodule" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainServiceTrust <a name="ActiveDirectoryDomainServiceTrust" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust azurerm_active_directory_domain_service_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer"></a>

```typescript
import { activeDirectoryDomainServiceTrust } from '@cdktf/provider-azurerm'

new activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust(scope: Construct, id: string, config: ActiveDirectoryDomainServiceTrustConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig">ActiveDirectoryDomainServiceTrustConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig">ActiveDirectoryDomainServiceTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.putTimeouts"></a>

```typescript
public putTimeouts(value: ActiveDirectoryDomainServiceTrustTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActiveDirectoryDomainServiceTrust resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct"></a>

```typescript
import { activeDirectoryDomainServiceTrust } from '@cdktf/provider-azurerm'

activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement"></a>

```typescript
import { activeDirectoryDomainServiceTrust } from '@cdktf/provider-azurerm'

activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource"></a>

```typescript
import { activeDirectoryDomainServiceTrust } from '@cdktf/provider-azurerm'

activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport"></a>

```typescript
import { activeDirectoryDomainServiceTrust } from '@cdktf/provider-azurerm'

activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ActiveDirectoryDomainServiceTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActiveDirectoryDomainServiceTrust to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActiveDirectoryDomainServiceTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActiveDirectoryDomainServiceTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference">ActiveDirectoryDomainServiceTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceIdInput">domainServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIpsInput">trustedDomainDnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdnInput">trustedDomainFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceId">domainServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIps">trustedDomainDnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdn">trustedDomainFqdn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainServiceTrustTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference">ActiveDirectoryDomainServiceTrustTimeoutsOutputReference</a>

---

##### `domainServiceIdInput`<sup>Optional</sup> <a name="domainServiceIdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceIdInput"></a>

```typescript
public readonly domainServiceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ActiveDirectoryDomainServiceTrustTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a>

---

##### `trustedDomainDnsIpsInput`<sup>Optional</sup> <a name="trustedDomainDnsIpsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIpsInput"></a>

```typescript
public readonly trustedDomainDnsIpsInput: string[];
```

- *Type:* string[]

---

##### `trustedDomainFqdnInput`<sup>Optional</sup> <a name="trustedDomainFqdnInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdnInput"></a>

```typescript
public readonly trustedDomainFqdnInput: string;
```

- *Type:* string

---

##### `domainServiceId`<sup>Required</sup> <a name="domainServiceId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceId"></a>

```typescript
public readonly domainServiceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `trustedDomainDnsIps`<sup>Required</sup> <a name="trustedDomainDnsIps" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIps"></a>

```typescript
public readonly trustedDomainDnsIps: string[];
```

- *Type:* string[]

---

##### `trustedDomainFqdn`<sup>Required</sup> <a name="trustedDomainFqdn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdn"></a>

```typescript
public readonly trustedDomainFqdn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainServiceTrustConfig <a name="ActiveDirectoryDomainServiceTrustConfig" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.Initializer"></a>

```typescript
import { activeDirectoryDomainServiceTrust } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceTrustConfig: activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.domainServiceId">domainServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#domain_service_id ActiveDirectoryDomainServiceTrust#domain_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#name ActiveDirectoryDomainServiceTrust#name}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#password ActiveDirectoryDomainServiceTrust#password}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainDnsIps">trustedDomainDnsIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#trusted_domain_dns_ips ActiveDirectoryDomainServiceTrust#trusted_domain_dns_ips}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainFqdn">trustedDomainFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#trusted_domain_fqdn ActiveDirectoryDomainServiceTrust#trusted_domain_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#id ActiveDirectoryDomainServiceTrust#id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainServiceId`<sup>Required</sup> <a name="domainServiceId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.domainServiceId"></a>

```typescript
public readonly domainServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#domain_service_id ActiveDirectoryDomainServiceTrust#domain_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#name ActiveDirectoryDomainServiceTrust#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#password ActiveDirectoryDomainServiceTrust#password}.

---

##### `trustedDomainDnsIps`<sup>Required</sup> <a name="trustedDomainDnsIps" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainDnsIps"></a>

```typescript
public readonly trustedDomainDnsIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#trusted_domain_dns_ips ActiveDirectoryDomainServiceTrust#trusted_domain_dns_ips}.

---

##### `trustedDomainFqdn`<sup>Required</sup> <a name="trustedDomainFqdn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainFqdn"></a>

```typescript
public readonly trustedDomainFqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#trusted_domain_fqdn ActiveDirectoryDomainServiceTrust#trusted_domain_fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#id ActiveDirectoryDomainServiceTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainServiceTrustTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#timeouts ActiveDirectoryDomainServiceTrust#timeouts}

---

### ActiveDirectoryDomainServiceTrustTimeouts <a name="ActiveDirectoryDomainServiceTrustTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.Initializer"></a>

```typescript
import { activeDirectoryDomainServiceTrust } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceTrustTimeouts: activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#create ActiveDirectoryDomainServiceTrust#create}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#delete ActiveDirectoryDomainServiceTrust#delete}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#read ActiveDirectoryDomainServiceTrust#read}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#update ActiveDirectoryDomainServiceTrust#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#create ActiveDirectoryDomainServiceTrust#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#delete ActiveDirectoryDomainServiceTrust#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#read ActiveDirectoryDomainServiceTrust#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/active_directory_domain_service_trust#update ActiveDirectoryDomainServiceTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainServiceTrustTimeoutsOutputReference <a name="ActiveDirectoryDomainServiceTrustTimeoutsOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer"></a>

```typescript
import { activeDirectoryDomainServiceTrust } from '@cdktf/provider-azurerm'

new activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActiveDirectoryDomainServiceTrustTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a>

---




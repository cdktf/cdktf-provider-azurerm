# `managementGroupPolicyExemption` Submodule <a name="`managementGroupPolicyExemption` Submodule" id="@cdktf/provider-azurerm.managementGroupPolicyExemption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupPolicyExemption <a name="ManagementGroupPolicyExemption" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption azurerm_management_group_policy_exemption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer"></a>

```typescript
import { managementGroupPolicyExemption } from '@cdktf/provider-azurerm'

new managementGroupPolicyExemption.ManagementGroupPolicyExemption(scope: Construct, id: string, config: ManagementGroupPolicyExemptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig">ManagementGroupPolicyExemptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig">ManagementGroupPolicyExemptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetPolicyDefinitionReferenceIds">resetPolicyDefinitionReferenceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagementGroupPolicyExemptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetExpiresOn"></a>

```typescript
public resetExpiresOn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetPolicyDefinitionReferenceIds` <a name="resetPolicyDefinitionReferenceIds" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetPolicyDefinitionReferenceIds"></a>

```typescript
public resetPolicyDefinitionReferenceIds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementGroupPolicyExemption resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct"></a>

```typescript
import { managementGroupPolicyExemption } from '@cdktf/provider-azurerm'

managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement"></a>

```typescript
import { managementGroupPolicyExemption } from '@cdktf/provider-azurerm'

managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource"></a>

```typescript
import { managementGroupPolicyExemption } from '@cdktf/provider-azurerm'

managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport"></a>

```typescript
import { managementGroupPolicyExemption } from '@cdktf/provider-azurerm'

managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagementGroupPolicyExemption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagementGroupPolicyExemption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagementGroupPolicyExemption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagementGroupPolicyExemption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference">ManagementGroupPolicyExemptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategoryInput">exemptionCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOnInput">expiresOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentIdInput">policyAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIdsInput">policyDefinitionReferenceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategory">exemptionCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeouts"></a>

```typescript
public readonly timeouts: ManagementGroupPolicyExemptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference">ManagementGroupPolicyExemptionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `exemptionCategoryInput`<sup>Optional</sup> <a name="exemptionCategoryInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategoryInput"></a>

```typescript
public readonly exemptionCategoryInput: string;
```

- *Type:* string

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOnInput"></a>

```typescript
public readonly expiresOnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupIdInput"></a>

```typescript
public readonly managementGroupIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyAssignmentIdInput`<sup>Optional</sup> <a name="policyAssignmentIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentIdInput"></a>

```typescript
public readonly policyAssignmentIdInput: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIdsInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdsInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIdsInput"></a>

```typescript
public readonly policyDefinitionReferenceIdsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagementGroupPolicyExemptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategory"></a>

```typescript
public readonly exemptionCategory: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

---

##### `policyDefinitionReferenceIds`<sup>Required</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIds"></a>

```typescript
public readonly policyDefinitionReferenceIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupPolicyExemptionConfig <a name="ManagementGroupPolicyExemptionConfig" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.Initializer"></a>

```typescript
import { managementGroupPolicyExemption } from '@cdktf/provider-azurerm'

const managementGroupPolicyExemptionConfig: managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.exemptionCategory">exemptionCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyAssignmentId">policyAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.expiresOn">expiresOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.exemptionCategory"></a>

```typescript
public readonly exemptionCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}.

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyAssignmentId"></a>

```typescript
public readonly policyAssignmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}.

---

##### `policyDefinitionReferenceIds`<sup>Optional</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyDefinitionReferenceIds"></a>

```typescript
public readonly policyDefinitionReferenceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagementGroupPolicyExemptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#timeouts ManagementGroupPolicyExemption#timeouts}

---

### ManagementGroupPolicyExemptionTimeouts <a name="ManagementGroupPolicyExemptionTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.Initializer"></a>

```typescript
import { managementGroupPolicyExemption } from '@cdktf/provider-azurerm'

const managementGroupPolicyExemptionTimeouts: managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#create ManagementGroupPolicyExemption#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#delete ManagementGroupPolicyExemption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#read ManagementGroupPolicyExemption#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#update ManagementGroupPolicyExemption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#create ManagementGroupPolicyExemption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#delete ManagementGroupPolicyExemption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#read ManagementGroupPolicyExemption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/management_group_policy_exemption#update ManagementGroupPolicyExemption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupPolicyExemptionTimeoutsOutputReference <a name="ManagementGroupPolicyExemptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { managementGroupPolicyExemption } from '@cdktf/provider-azurerm'

new managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagementGroupPolicyExemptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

---




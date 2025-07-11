# `subnetNetworkSecurityGroupAssociation` Submodule <a name="`subnetNetworkSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubnetNetworkSecurityGroupAssociation <a name="SubnetNetworkSecurityGroupAssociation" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association azurerm_subnet_network_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer"></a>

```typescript
import { subnetNetworkSecurityGroupAssociation } from '@cdktf/provider-azurerm'

new subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation(scope: Construct, id: string, config: SubnetNetworkSecurityGroupAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig">SubnetNetworkSecurityGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig">SubnetNetworkSecurityGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: SubnetNetworkSecurityGroupAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SubnetNetworkSecurityGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct"></a>

```typescript
import { subnetNetworkSecurityGroupAssociation } from '@cdktf/provider-azurerm'

subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement"></a>

```typescript
import { subnetNetworkSecurityGroupAssociation } from '@cdktf/provider-azurerm'

subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource"></a>

```typescript
import { subnetNetworkSecurityGroupAssociation } from '@cdktf/provider-azurerm'

subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport"></a>

```typescript
import { subnetNetworkSecurityGroupAssociation } from '@cdktf/provider-azurerm'

subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SubnetNetworkSecurityGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SubnetNetworkSecurityGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SubnetNetworkSecurityGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SubnetNetworkSecurityGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference">SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupIdInput">networkSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference">SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkSecurityGroupIdInput`<sup>Optional</sup> <a name="networkSecurityGroupIdInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupIdInput"></a>

```typescript
public readonly networkSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubnetNetworkSecurityGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupId"></a>

```typescript
public readonly networkSecurityGroupId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetNetworkSecurityGroupAssociationConfig <a name="SubnetNetworkSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.Initializer"></a>

```typescript
import { subnetNetworkSecurityGroupAssociation } from '@cdktf/provider-azurerm'

const subnetNetworkSecurityGroupAssociationConfig: subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#network_security_group_id SubnetNetworkSecurityGroupAssociation#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#subnet_id SubnetNetworkSecurityGroupAssociation#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#id SubnetNetworkSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.networkSecurityGroupId"></a>

```typescript
public readonly networkSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#network_security_group_id SubnetNetworkSecurityGroupAssociation#network_security_group_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#subnet_id SubnetNetworkSecurityGroupAssociation#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#id SubnetNetworkSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetNetworkSecurityGroupAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#timeouts SubnetNetworkSecurityGroupAssociation#timeouts}

---

### SubnetNetworkSecurityGroupAssociationTimeouts <a name="SubnetNetworkSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.Initializer"></a>

```typescript
import { subnetNetworkSecurityGroupAssociation } from '@cdktf/provider-azurerm'

const subnetNetworkSecurityGroupAssociationTimeouts: subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#create SubnetNetworkSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#delete SubnetNetworkSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#read SubnetNetworkSecurityGroupAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#create SubnetNetworkSecurityGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#delete SubnetNetworkSecurityGroupAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/subnet_network_security_group_association#read SubnetNetworkSecurityGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference <a name="SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { subnetNetworkSecurityGroupAssociation } from '@cdktf/provider-azurerm'

new subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubnetNetworkSecurityGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

---



